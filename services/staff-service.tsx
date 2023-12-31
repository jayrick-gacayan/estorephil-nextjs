import { injectable } from "inversify";

@injectable()
export class StaffService {
    async getStaff(token: string, page: number, limit: number) {
        const response = await fetch(`${process.env.API_URL}/staff?page=${page}&limit=${limit}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        var result = await response.json();
        console.log('get staff result: ', result)
        return result;
    }
}