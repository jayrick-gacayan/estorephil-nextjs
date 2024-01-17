import { SignInProps } from "@/types/props/sign-in-props";
import { injectable } from "inversify";
import { SignInOptions, SignInResponse, signIn, signOut } from "next-auth/react";

@injectable()
export class AccountService {

  #headers(token: string, isImage: boolean) {
    let headers = { Authorization: `Bearer ${token}` }

    return isImage ? headers : { ...headers, 'Content-Type': 'application/json' };
  }
  async login({ body }: { body: SignInOptions }) {
    const res = await signIn("credentials", body)
    console.log('account service login', res)
    return res
  }
  async registerStore(body: string) {
    const res = await fetch(`${process.env.API_URL}/register`, {
      headers: {
        'Content-Type': 'application-json',
      },
      body: body,
      method: 'POST',
    })
  }
  async nextAuthSignOut(callbackUrl?: string) {
    return await signOut(callbackUrl ? { callbackUrl: callbackUrl } : {})
  }
  async register({ body }: { body: FormData }) {
    return await fetch(
      `${process.env.API_URL}/register-company`,
      {
        method: 'POST',
        body,
      }
    );
  }
  async registerAgent({ body }: { body: string }) {
    console.log('register agent service')
    return await fetch(
      `${process.env.API_URL}/register-user`,
      {
        method: 'POST',
        body: body,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
  async registerAgentCompany(body: string) {
    return await fetch(`${process.env.API_URL}/register-company`, {
      method: 'POST',
      body: body,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  async agentSendInvitation(id: number) {
    return await fetch(`${process.env.API_URL}/agent/${id}/send-invitation`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
  }

  async getCompanyDataFromInvitation(code: string) {
    return await fetch(`${process.env.API_URL}/company?${encodeURIComponent('invitation')}=${encodeURIComponent(code)}`, {
      headers: { 'Content-Type': 'application/json' }
    })
  }

  async registerUser(body: string) {
    return await fetch(`${process.env.API_URL}/register-user`, {
      method: 'POST',
      body: body,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  async updateAgent(body: string | FormData, token: string, isImage: boolean = false) {
    return await fetch(`${process.env.API_URL}/agents/update-agency`, {
      method: 'PUT',
      body: body,
      headers: { ...this.#headers(token, isImage) }
    })
  }
}