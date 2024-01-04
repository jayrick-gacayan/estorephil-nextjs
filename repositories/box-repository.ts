import { TYPES } from "@/inversify/types";
import { Box } from "@/models/box";
import { Paginated } from "@/models/paginated";
import { BoxService } from "@/services/box-service";
import { RequestStatus } from "@/types/enums/request-status";
import { Result } from "@/types/helpers/result-helpers";
import { capitalCase, kebabCase } from "change-case";
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
  regionFees: { region: string; price: string; }[]
}

@injectable()
export class BoxRepository {
  #boxService: BoxService;

  constructor(@inject(TYPES.BoxService) boxService: BoxService) {
    this.#boxService = boxService
  }

  async createBox(box: BoxInputProps, token: string) {

    let { regionFees, ...rest } = box;
    let toSend: any = {
      box: snakeCase(rest)
    };

    if (regionFees.length > 0) {
      toSend = {
        ...toSend,
        regionFees: regionFees
      }
    }

    let result = await this.#boxService.createBox(
      JSON.stringify(toSend), token
    )

    let response: any = undefined;

    if (result.status === 200) {
      response = await result.json();
    }

    console.log('data', camelCase({ ...response.data }))
    return new Result<Box>({
      response: response,
      data: camelCase({
        ...response.data,
        boxType: kebabCase(capitalCase(response.data.box_type ?? '')),
        referralPercentage: response.data.referral_percentage ?? undefined,
        price: response.data.price ?? undefined
      }) ?? undefined,
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
      data: camelCase({
        ...response.data,
        boxType: kebabCase(capitalCase(response.data.box_type ?? '')),
        referralPercentage: response.data.referral_percentage ?? undefined,
        price: response.data.price ?? undefined
      }) ?? undefined,
      statusCode: response.status,
    })
  }

  async getAllCourierBoxes(currentPage: number, token: string) {
    let result = await this.#boxService.getAllCourierBoxes(token, currentPage);

    let response: any = undefined;

    if (result.status === 200) {
      response = await result.json();
    }

    return new Result<Paginated<Box>>({
      response: response,
      data: {
        currentPage: currentPage,
        count: response.data.count ?? 0,
        data: response.data.boxes.map((value: any) => {

          return camelCase({
            ...value,
            boxType: kebabCase(capitalCase(value.box_type ?? '')),
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