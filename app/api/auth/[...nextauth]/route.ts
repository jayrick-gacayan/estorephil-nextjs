import NextAuth, { AuthOptions, JWT } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        console.log('auth options called', { email, password })
        const data = await fetch(`${process.env.API_URL}/login`, {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        // console.log('login route -----', data.json())
        const res = await data.json();
        if (res?.status !== 200) {
          throw new Error(res?.status);
        }
        return res?.data;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt: async ({ token, user, trigger, session }) => {
      user && (token.user = user);
      if (trigger === "update") {
        return session
      }
      return token;
    },
    session: async ({ session, token, trigger, newSession }) => {
      session.user = (token.user as any).user as any
      session.company = (token.user as any).company as any || null
      session.store = (token.user as any).store as any || null
      session.token = (token.user as any).token as any
      return session;
    },
    signIn: async () => {
      return Promise.resolve(true);
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
