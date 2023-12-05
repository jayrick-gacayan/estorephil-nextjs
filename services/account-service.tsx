import { injectable } from "inversify";
import { SignInOptions, signIn } from "next-auth/react";

@injectable()
export class AccountService {
    async login({ body }: { body: SignInOptions }) {
        const res = await signIn("credentials", body)
        return res
      }
}