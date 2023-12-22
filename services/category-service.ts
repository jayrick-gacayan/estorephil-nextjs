import { injectable } from 'inversify';

@injectable()
export class CategoryService {
  async getMainCategories(locale: string) {
    return await fetch(`${process.env.API_URL}/main-categories/${locale}`, {
      next: { revalidate: 0 }
    });
  }
}