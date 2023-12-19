import { TYPES } from "@/inversify/types";
import { CookiesService } from "@/services/cookies-service";
import { Result } from "@/types/helpers/result-helpers";
import { camelCase, snakeCase } from "change-case/keys";
import { inject, injectable } from "inversify";

@injectable()
export class CookiesRepository {
  #cookieService: CookiesService;

  constructor(@inject(TYPES.CookiesService) cookieService: CookiesService) {
    this.#cookieService = cookieService;
  }

  async setCountryCookie(countryCode: string) {
    let result = await this.#cookieService.setCountryCookie(JSON.stringify(snakeCase({ countryCode })))

    let response = await result.json();

    return new Result<any>({
      response: response,
      data: camelCase(response.data),
      statusCode: result.status
    })
  }

  async getCountryCookie() {
    let result = await this.#cookieService.getCountryCookie();

    let response = await result.json();

    console.log('response', response);
    return new Result<any>({
      response: response,
      data: camelCase(response.data),
      statusCode: result.status
    })
  }
}