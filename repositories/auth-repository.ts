import { TYPES } from "@/inversify/types";
import { AuthService } from "@/services/auth-service";
import { Result } from "@/types/helpers/result-helpers";
import { SignInProps } from "@/types/props/sign-in-props";
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
      statusCode: result?.status
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
}