import { injectable } from "inversify";

@injectable()

export class BoxService {
  async createBox(body: string, token: string) {
    return await fetch(`${process.env.API_URL}/create-box`, {
      method: "POST",
      body: body,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  }

  async updateBox(body: string, token: string) {
    return await fetch(`${process.env.API_URL}/update-box`, {
      method: "PUT",
      body: body,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  }

  async getAllCourierBoxes(token: string, page: number) {
    return await fetch(`${process.env.API_URL}/courier/all-boxes?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  }
}