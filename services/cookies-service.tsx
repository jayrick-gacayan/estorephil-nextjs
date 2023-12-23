import { injectable } from "inversify";

@injectable()
export class CookiesService {
  async getCountryCookie() {
    return await fetch('http://localhost:3000/api/cookies-country', {
      headers: {
        'Content-Type': 'application/json',
      },
    });

  }

  async setCountryCookie(body: string) {
    return await fetch(`http://localhost:3000/api/cookies-country`, {
      method: 'POST',
      body: body,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

}