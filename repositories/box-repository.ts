import { TYPES } from "@/inversify/types";
import { Box } from "@/models/box";
import { BoxService } from "@/services/box-service";
import { Result } from "@/types/helpers/result-helpers";
import { camelCase, snakeCase } from "change-case/keys";

import { inject, injectable } from "inversify";

type BoxInputProps = {
  cargoType: string;
  boxType: string;
  length: string;
  width: string;
  height: string;
  unitMeasure: string;
  weight: string;
  weightType: string;
  price: string;
  referralPercentage: string;
}

@injectable()
export class BoxRepository {
  #boxService: BoxService;

  constructor(@inject(TYPES.BoxService) boxService: BoxService) {
    this.#boxService = boxService
  }

  async createBox(box: BoxInputProps, token: string) {
    let result = await this.#boxService.createBox(
      JSON.stringify({ box: snakeCase(box) }), token
    )

    let response: any = undefined;

    if (result.status === 200) {
      response = await result.json();
    }

    console.log('data', camelCase({ ...response.data }))
    return new Result<Box>({
      response: response,
      data: camelCase({ ...response.data }) ?? undefined,
      statusCode: response.status,
    })

  }

  async updateBox(box: BoxInputProps, token: string, id: string) {
    let result = await this.#boxService.updateBox(
      JSON.stringify({ box: snakeCase(box), id: id }), token
    );

    let response: any = undefined;

    if (result.status === 200) {
      response = await result.json();
    }

    return new Result<Box>({
      response: response,
      data: camelCase({ ...response.data }) ?? undefined,
      statusCode: response.status,
    })

  }
}