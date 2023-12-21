import { ValidationResponse } from "../props/validation-response";
import CustomValidation from "./custom-validation";

export class ValidationHelpers {
  isEmail(value: string) {
    return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value.trim());
  }
  isMinimum(value: string, min: number) {
    return value.trim().length < min;
  }
  isMaximum(value: string, max: number) {
    return value.trim().length > max
  }

  hasSpecialCharsOrNumeric(value: string) {
    return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value.trim()) || /\d+/.test(value.trim())
  }
}

export function getValidationResponse<T>(
  value: T,
  field: string,
  validations?: string[],
  otherOptions?: {
    errorTextOptions?: {
      min?: number;
      compareMatch?: string;
      max?: number;
    },
    compareValidation?: string
  }

): ValidationResponse {
  let validate = new CustomValidation();
  validate.setErrorType<T>(value, validations, otherOptions?.compareValidation);
  validate.setErrorText(field, otherOptions?.errorTextOptions);

  return validate.getErrorResponse();
}
