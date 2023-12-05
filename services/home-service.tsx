import { injectable } from "inversify";

@injectable()
export class HomeService {
    async getMainCategories(locale: string) {
        const response = await fetch(`${process.env.API_URL}/main-categories/${locale}`, {
            method: 'GET',
        })
        var result = await response.json();
        console.log('home service: ', result)
        return result;
    }
}