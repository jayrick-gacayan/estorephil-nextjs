import { TYPES } from '@/inversify/types';
import { Categories } from '@/models/category';
import { CategoryService } from '@/services/category-service';
import { Result } from '@/types/helpers/result-helpers';
import { camelCase } from 'change-case/keys';
import { inject, injectable } from 'inversify';

@injectable()
export class CategoryRepository {
  #categoryService: CategoryService;

  constructor(@inject(TYPES.CategoryService) categoryService: CategoryService,
  ) {
    this.#categoryService = categoryService;
  }

  async getMainCategories(locale: string) {
    let result = await this.#categoryService.getMainCategories(locale);

    let response: any = undefined;

    if (result.status === 200) {
      response = camelCase(await result.json());
    }

    return new Result<Categories[]>(
      {
        response: response,
        data: response.data,
        statusCode: response.status
      }
    )
  }
}