import { ValidationResponse } from "../props/validation-response";
import CustomValidation from "./custom-validation";

export class ValidationHelpers {
  isEmail(value: string) {
    return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
  }
}

export function getValidationResponse<T>(value: T, field: string, validations?: string[]): ValidationResponse {
  let validate = new CustomValidation();
  validate.setErrorType<T>(value, validations);
  validate.setErrorText(field);

  return validate.getErrorResponse();
}
