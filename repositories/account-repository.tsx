import { TYPES } from '@/inversify/types';
import { Company } from '@/models/company';
import { AccountService } from '@/services/account-service';
import { Result } from '@/types/helpers/result-helpers';
import { CompanyFieldProps } from '@/types/props/company-field-props';
import { snakeCase, camelCase } from 'change-case/keys';
import { inject, injectable } from 'inversify';
import { SignInOptions, SignInResponse } from 'next-auth/react';

@injectable()
export class AccountRepository {
    accountService: AccountService;

    constructor(@inject(TYPES.AccountService) accountService: AccountService) {
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

    async registerAgentCompany(company: CompanyFieldProps) {
        console.log('sdfjsdklfjsdklf', snakeCase(company));
        let result = await this.accountService.registerAgentCompany(JSON.stringify({ company: snakeCase(company) }))

        let response: any = undefined;

        if (result.status === 200) {
            response = camelCase({ ...await result.json() });
        }

        return new Result<Company>({
            response: response,
            data: camelCase({ ...response.data }) ?? undefined,
            message: response.message,
            statusCode: response.status,
            error: response.error
        })
    }

    async agentSendInvitation(id: number) {
        let result = await this.accountService.agentSendInvitation(id);

        let response: any = undefined;

        if (result.status === 200) {
            response = await result.json();
        }

        return new Result<any>({
            response: response,
            message: response.message,
            statusCode: response.status
        })
    }

    async getCompanyDataFromInvitation(code: string) {
        let result = await this.accountService.getCompanyDataFromInvitation(code);

        let response: any = undefined;

        if (result.status === 200) {
            response = await result.json();
        }


        return new Result<Company>({
            response: response,
            data: camelCase({ ...response.data }) ?? undefined,
            statusCode: response.status,
            error: response.error,
        })
    }

    async registerUser({ user, company }: {
        user: {
            role: string;
            email: string;
            firstName: string;
            lastName: string;
            password: string;
            passwordConfirmation: string;
            token: string;
        };
        company: { name: string; }
    }) {
        let result = await this.accountService.registerUser(
            JSON.stringify({
                user: snakeCase(user),
                company: snakeCase(company)
            })
        );

        let response: any = undefined;

        if (result.status === 200) {
            response = await result.json();
        }
        return new Result<any>({
            response: response,
            data: response.data,
            statusCode: response.status,
        })
    }
}
