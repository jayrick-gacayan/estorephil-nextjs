import { ValidationResponse, ValidationType } from '@/models/validation-response';

export default class CustomValidation {
  private errorText: string;
  private validationStatus: ValidationType;

  constructor() {
    this.errorText = '';
    this.validationStatus = ValidationType.NONE
  }

  setErrorText(field: string,
    options?: {
      min?: number;
      compareMatch?: string;
      max?: number;
    }) {
    switch (this.validationStatus) {
      case ValidationType.EMPTY:
        this.errorText = `${field} is required`;
        break;
      case ValidationType.INVALID_FORMAT:
        this.errorText = `${field} is in invalid format.`;
        break;
    }
  }

  setErrorType<T>(value: T, options?: string[]) {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        this.validationStatus = ValidationType.EMPTY;
      }
    }
    else if (typeof value === 'string') {
      if (options) {
        for (let i: number = 0; i < options.length; i++) {
          let opt: string = options[i];
          switch (opt.toLowerCase()) {
            case opt.match(/required/)?.input:
              if (value.trim() === '') {
                this.validationStatus = ValidationType.EMPTY;
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

          if (this.validationStatus !== ValidationType.NONE) {
            break;
          }
        }
      }
    }
    else {
      if (!value) { this.validationStatus = ValidationType.EMPTY; }
    }
  }

  getErrorResponse(): ValidationResponse {
    return {
      errorText: this.errorText,
      status: this.validationStatus
    }
  }
}