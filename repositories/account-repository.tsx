import { TYPES } from '@/inversify/types';
import { Company } from '@/models/company';
import { AccountService } from '@/services/account-service';
import { Result } from '@/types/helpers/result-helpers';
import { CompanyFieldProps } from '@/types/props/company-field-props';
import { snakeCase, camelCase } from 'change-case/keys';
import { inject, injectable } from 'inversify';
import { SignInOptions } from 'next-auth/react';

@injectable()
export class AccountRepository {
    #accountService: AccountService;
    public constructor(
        @inject(TYPES.AccountService) accountService: AccountService,
    ) {
        this.#accountService = accountService;
    }
    async login({ email, password }: { email: string, password: string }) {
        const body: SignInOptions = {
            email,
            password,
            redirect: false,
        }
        console.log('login repo body', body)
        return await this.#accountService.login({ body })
    }
    // async registerStore({})

    async registerAgentCompany(company: CompanyFieldProps) {
        let result = await this.#accountService.registerAgentCompany(JSON.stringify({ company: snakeCase(company) }))

        let response: any = undefined;

        if (result.status === 200) {
            response = camelCase(await result.json());
        }

        return new Result<Company>({
            response: response,
            data: response.data,
            message: response.message,
            statusCode: result.status
        })
    }
}
