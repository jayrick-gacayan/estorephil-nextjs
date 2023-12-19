import { injectable } from "inversify";
import { SignInOptions, signIn, signOut } from "next-auth/react";

@injectable()
export class AccountService {
  async login({ body }: { body: SignInOptions }) {
    const res = await signIn("credentials", body)
    console.log('account service login', res)
    return res
  }
  async registerStore(body:string) {
    const res = await fetch(`${process.env.API_URL}/register`, {
      headers: {
        'Content-Type': 'application-json',
      },
      body: body,
      method: 'POST',
    })
  }
}