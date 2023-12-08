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
        const formData = new FormData();
        formData.append('user[email]', email)
        formData.append('user[password]', password)
        console.log('auth options called')
        const data = await fetch(`${process.env.API_URL}/login`, {
          method: "POST",
          body: formData,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });


        console.log('login route -----', data.json())
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
      session.user = token as {
        id: number,
        email: string
        first_name: string
        last_name: string
        phone_number?: string
        address?: string
        status?: string
        accessToken?: string
      }
      return session;
    },
    signIn: async () => {
      return Promise.resolve(true);
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
