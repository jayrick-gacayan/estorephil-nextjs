import { ValidationResponse, ValidationType } from '@/models/validation-response';
import { ValidationHelpers } from './validation_helpers';

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
    }
  }

  setErrorType<T>(value: T, options?: string[]) {
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
            // case opt.match(/format/)?.input:
            //   if (!value.isEmail()) { return ErrorType.INVALID_FORMAT; }
            //   break;
            // case opt.match(/min:\d/)?.input:
            //   {
            //     let dgt: string = opt.substring(4, opt.length);
            //     if (value.isMinumum(parseInt(dgt))) { return ErrorType.MIN; }
            //   }
            //   break;
            // case opt.match(/max:\d/)?.input:
            //   {
            //     let dgt: string = opt.substring(4, opt.length);
            //     if (value.isMaximum(parseInt(dgt))) { return ErrorType.MAX; }
            //   }
            //   break;
            // case opt.match(/non-alpha/)?.input:
            //   if (!value.isAlphaChar()) { return ErrorType.NON_ALPHA_CHAR; }
            //   break;
            // case opt.match(/phone/)?.input:
            //   if (!value.isPhoneNumber()) { return ErrorType.INVALID_FORMAT; }
            //   break;
            // case opt.match(/url/)?.input:
            //   if (!value.isWebsiteURL()) { return ErrorType.INVALID_URL; }
            //   break;
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
  }

  get getErrorResponse(): ValidationResponse {
    return {
      errorText: this.#errorText,
      status: this.#status
    }
  }
}