import { ValidationType } from "../enums/validation-type";
export type ValidationResponse = {
  status: ValidationType,
  errorText: string,
}