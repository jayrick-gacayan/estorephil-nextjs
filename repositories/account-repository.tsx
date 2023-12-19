
import { TYPES } from "@/inversify/types";
import { AccountService } from "@/services/account-service";
import { inject, injectable } from "inversify";
import { SignInOptions } from "next-auth/react";


@injectable()
export class AccountRepository {
    private accountService: AccountService;
    public constructor(
        @inject(TYPES.AccountService) accountService: AccountService,
    ) {
        this.accountService = accountService;
    }
    async login({ email, password }: { email: string, password: string }) {
        const body: SignInOptions = {
            email,
            password,
            redirect: false,
        }
        console.log('login repo body', body)
        return await this.accountService.login({ body })
    }
    // async registerStore({})
}
