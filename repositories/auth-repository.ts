import { TYPES } from "@/inversify/types";
import { AuthService } from "@/services/auth-service";
import { Result } from "@/types/helpers/result-helpers";
import { SignInProps } from "@/types/props/sign-in-props";
import { camelCase, snakeCase } from "change-case/keys";
import { inject, injectable } from "inversify";
import { SignInResponse } from "next-auth/react";

@injectable()
export class AuthRepository {
  #authService: AuthService;

  constructor(@inject(TYPES.AuthService) authService: AuthService) {
    this.#authService = authService
  }

  async nextAuthSignIn(body: SignInProps): Promise<Result<SignInResponse | undefined>> {
    let result: SignInResponse | undefined = await this.#authService.nextAuthSignIn(body);

    return new Result<SignInResponse | undefined>({
      response: result,
      data: result,
      statusCode: result?.status ?? 0
    })
  }

  async nextAuthSignOut(callbackUrl?: string) {
    let result = await this.#authService.nextAuthSignOut(callbackUrl);

    return new Result<undefined>({
      response: result,
      data: result,
      statusCode: 200
    })
  }

  async loginBackend(body: SignInProps) {

    let result = await this.#authService.loginBackend(
      JSON.stringify({ ...body })
    )

    let response: any = undefined;

    if (result.status === 200) {
      response = camelCase(await result.json())
    }

    console.log('response', response)
    return new Result<any>({
      response: response,
      data: response.data,
      message: response.message,
      statusCode: result.status
    })
  }
}