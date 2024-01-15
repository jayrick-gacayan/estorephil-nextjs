import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        let result = await fetch(`${process.env.API_URL}/login`, {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        let response = await result.json();
        if (response?.status !== 200) {
          throw new Error(response.message);
        }

        return response?.data;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  // secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ token, user, trigger, session }) => {
      user && (token.user = user);
      if (trigger === "update") {
        console.log('token',token)
        console.log('session',session)
        return session
      }
      return token;
    },
    session: async ({ session, token, trigger, newSession }) => {
      session.user = (token.user as any).user as any
      session.company = (token.user as any).company as any || null
      session.store = (token.user as any).store as any || null
      session.token = (token.user as any).token as any
      session.cart = (token.user as any).cart as any
      return session;
    },
    signIn: async () => {
      return Promise.resolve(true);
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
