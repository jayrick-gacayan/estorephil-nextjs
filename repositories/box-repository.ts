import { TYPES } from "@/inversify/types";
import { Box } from "@/models/box";
import { Paginated } from "@/models/paginated";
import { BoxService } from "@/services/box-service";
import { RequestStatus } from "@/types/enums/request-status";
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

  async getAllCourierBoxes(currentPage: number, token: string) {
    let result = await this.#boxService.getAllCourierBoxes(token, currentPage);

    let response: any = undefined;

    if (result.status === 200) {
      response = await result.json();
    }

    console.log('response', response.data.boxes)
    return new Result<Paginated<Box>>({
      response: response,
      data: {
        currentPage: currentPage,
        count: response.data.count ?? 0,
        data: response.data.boxes.map((value: any) => {

          return camelCase({
            ...value,
            referralPercentage: value.referral_percentage ?? undefined,
            price: value.price ?? undefined
          })
        }) ?? [],
        requestStatus: response.status === 200 ? RequestStatus.SUCCESS : RequestStatus.FAILURE
      },
      statusCode: response.status
    })
  }
}