import { ValidationType } from "../enums/validation-type";
import { ValidationResponse } from "../props/validation-response";
import { ValidationHelpers } from "./validation_helpers";

export default class CustomValidation {
  #errorText: string;
  #status: ValidationType;

  constructor() {
    this.#errorText = '';
    this.#status = ValidationType.NONE
  }

  setErrorText(field: string,
    options?: {
      min?: number;
      compareMatch?: string;
      max?: number;
    }) {
    switch (this.#status) {
      case ValidationType.EMPTY:
        this.#errorText = `${field} is required`;
        break;
      case ValidationType.INVALID_FORMAT:
        this.#errorText = `${field} is in invalid format.`;
        break;
      case ValidationType.MIN:
        this.#errorText = `${field} must be in minimum of ${options?.min} characters.`;
        break;
      case ValidationType.MAX:
        this.#errorText = `${field} must be at maximum of ${options?.max} characters.`;
        break;
      case ValidationType.HAS_CHARS_NUMERIC:
        this.#errorText = `${field} must have at least one special character or one digit.`;
        break;
      case ValidationType.MISMATCH:
        this.#errorText = `${options?.compareMatch} and ${field.toLowerCase()} must be match.`;
        break;
    }
  }

  setErrorType<T>(value: T, options?: string[], comparison?: string) {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        this.#status = ValidationType.EMPTY;
      }
    }
    else if (typeof value === 'string') {
      if (options) {
        let validHelper = new ValidationHelpers();
        for (let i: number = 0; i < options.length; i++) {
          let opt: string = options[i];
          switch (opt.toLowerCase()) {
            case opt.match(/required/)?.input:
              if (value.trim() === '') {
                this.#status = ValidationType.EMPTY;
              }
              break;
            case opt.match(/email/)?.input:
              if (!validHelper.isEmail(value)) {
                this.#status = ValidationType.INVALID_FORMAT;
              }
              break;
            case opt.match(/min:\d/)?.input:
              {
                let dgt: string = opt.substring(4, opt.length);
                if (validHelper.isMinimum(value, parseInt(dgt))) {
                  this.#status = ValidationType.MIN;
                }
              }
              break;
            case opt.match(/max:\d/)?.input:
              {
                let dgt: string = opt.substring(4, opt.length);
                if (validHelper.isMaximum(value, parseInt(dgt))) {
                  console.log('sdfjsldkfjsd', dgt)
                  this.#status = ValidationType.MAX;
                }
              }
              break;
            case opt.match(/has-chars-numeric/)?.input:
              {
                if (!validHelper.hasSpecialCharsOrNumeric(value)) {
                  this.#status = ValidationType.HAS_CHARS_NUMERIC;
                }
              }
              break;
            case opt.match(/match/)?.input:
              {
                if (value !== comparison!) {
                  this.#status = ValidationType.MISMATCH;
                }
              }
              break;
          }

          if (this.#status !== ValidationType.NONE) {
            break;
          }
        }
      }
    }
    else {
      if (!value) { this.#status = ValidationType.EMPTY; }
    }

    if (this.#status === ValidationType.NONE) {
      this.#status = ValidationType.VALID;
    }
  }

  getErrorResponse(): ValidationResponse {
    return {
      errorText: this.#errorText,
      status: this.#status
    }
  }
}