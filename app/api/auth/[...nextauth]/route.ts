import { authContainer } from "@/inversify/inversify.config";
import { TYPES } from "@/inversify/types";
import { AuthRepository } from "@/repositories/auth-repository";
import { ResultStatus } from "@/types/enums/result-status";
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
        console.log('auth options called', { email, password })
        const authRepository = authContainer.get<AuthRepository>(TYPES.AuthRepository);

        let result = await authRepository.loginBackend({ email, password });
        console.log('login route -----', result.data)

        if (result.resultStatus !== ResultStatus.SUCCESS) {
          throw new Error(result.message);
        }
        return result?.data.data;
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
        console.log('route token', token, session)
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
