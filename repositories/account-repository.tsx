import { TYPES } from '@/inversify/types';
import { Company } from '@/models/company';
import { User } from '@/models/user';
import { AccountService } from '@/services/account-service';
import { Result } from '@/types/helpers/result-helpers';
import { CompanyFieldProps } from '@/types/props/company-field-props';
import { SignInProps } from '@/types/props/sign-in-props';
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
    async nextAuthSignOut(callbackUrl?: string) {
        let result = await this.accountService.nextAuthSignOut(callbackUrl);

        return new Result<undefined>({
            response: result,
            data: result,
            statusCode: 200
        })
    }
    async register(body: any) {
        var formData = new FormData();
        formData.append('company[company_name]', body.businessName)
        formData.append('company[business_nature]', body.businessNature)
        formData.append('company[first_name]', body.firstName)
        formData.append('company[last_name]', body.lastName)
        formData.append('company[email]', body.email)
        formData.append('company[phone_number]', body.phoneNumber)
        var response = await this.accountService.register({ body: formData })
        var res = await response.json()
        return res;
    }
    // async registerAgentCompany(company: CompanyFieldProps) {
    //     let result = await this.accountService.registerAgentCompany(JSON.stringify({ company: snakeCase(company) }))

    //     let response: any = undefined;

    //     if (result.status === 200) {
    //         response = camelCase({ ...await result.json() });
    //     }

    //     return new Result<Company>({
    //         response: response,
    //         data: camelCase({ ...response.data }) ?? undefined,
    //         message: response.message,
    //         statusCode: response.status,
    //         error: response.error
    //     })
    // }

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
    async registerAgent(data: any) {
        console.log('register agent repository')
        const body = {
            user: {
                role: data.role,
                first_name: data.firstName,
                last_name: data.lastName,
                email: data.email,
                password: data.password,
                password_confirmation: data.passwordConfirm,
            },
            company: {
                name: data.companyName
            }
        }
        // var formData = new FormData();
        // formData.append('user[role]', data.role)
        // formData.append('user[first_name]', data.firstName)
        // formData.append('user[last_name]', data.lastName)
        // formData.append('user[email]', data.email)
        // formData.append('user[password]]', data.password)
        // formData.append('user[password_confirmation]', data.passwordConfirm)
        // formData.append('user[token]', data.token)
        // formData.append('company[name]', data.companyName)

        let result = await this.accountService.registerAgent({ body: JSON.stringify(body) })
        let response = await result.json();

        return new Result<any>({
            response: response,
            data: response.data,
            statusCode: response.status
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

    async updateAgentBasicInfo(
        user:
            {
                firstName?: string;
                lastName?: string;
                phoneNumber?: string,
                address1?: string,
                address2?: string
                city?: string,
                province?: string,
            }
        ,
        token: string) {

        let objectToSend: any = {};

        if (user.firstName && user.firstName.length > 0) {
            objectToSend['first_name'] = user.firstName;
        }

        if (user.lastName && user.lastName.length > 0) {
            objectToSend['last_name'] = user.lastName;
        }

        if (user.phoneNumber && user.phoneNumber.length > 0) {
            objectToSend['phone_number'] = user.phoneNumber;
        }
        if (user.address1 && user.address1.length > 0) {
            objectToSend['address_1'] = user.address1;
        }

        if (!!user.address2 && user.address2.length > 0) {
            objectToSend['address_2'] = user.address2;
        }

        if (!!user.city && user.city.length > 0) {
            objectToSend['city'] = user.city;
        }
        if (!!user.province && user.province.length > 0) {
            objectToSend['province'] = user.province;
        }

        let result = await this.accountService.updateAgent(JSON.stringify({ user: { ...objectToSend } }), token);

        let response: any = undefined;

        if (result.status === 200) {
            response = await result.json();
        }

        return new Result<User>({
            response: response,
            data: response?.data?.user ? camelCase({ ...response.data.user }) as any : undefined,
            error: response?.error ?? undefined,
            statusCode: response.status
        });

    }

    async updateAgentProfileImage(user: {
        profileImage?: File
    }, token: string) {
        let formData = new FormData();

        if (user.profileImage) {
            formData.set('user[profile_image]', user.profileImage)
        }

        let result = await this.accountService.updateAgent(formData, token, true);

        let response: any = undefined;

        if (result.status === 200) {
            response = await result.json();
        }

        return new Result<any>({
            response: response,
            data: response?.data?.user ? camelCase({ ...response.data.user }) as any : undefined,
            error: response?.error ?? undefined,
            statusCode: response.status
        });
    }


}
