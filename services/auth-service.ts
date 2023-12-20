import { SignInProps } from "@/types/props/sign-in-props";
import { injectable } from "inversify";
import { SignInResponse, signIn, signOut } from "next-auth/react";

@injectable()
export class AuthService {
  async nextAuthSignIn(body: SignInProps): Promise<SignInResponse | undefined> {
    return await signIn('credentials', { redirect: false, ...body });
  }

  async nextAuthSignOut(callbackUrl?: string) {
    return await signOut(callbackUrl ? { callbackUrl: callbackUrl } : {})
  }
}