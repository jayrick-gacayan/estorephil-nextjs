import { noCase } from "change-case";
import { ValidationType } from "../enums/validation-type";
import { ValidationHelpers } from "./validation_helpers";

export class ValidationCustom {
  #validators: { [key: string]: { field: string; value: any, validations: string } }[];

  constructor(
    validators: { [key: string]: { field: string; value: any, validations: string } }[]) {
    this.#validators = validators;
  }

  setError(field: string, value: any, rules: string) {
    let status = ValidationType.NONE;
    let errorText = '';

    if (Array.isArray(value)) {
      if (value.length === 0) {
        status = ValidationType.EMPTY;
        errorText = `${field} is required.`;
      }
    }
    else if (typeof value === 'string') {
      let options = rules.split('|')
      let validHelper = new ValidationHelpers();
      for (let i: number = 0; i < options.length; i++) {
        let opt: string = options[i];
        switch (opt.toLowerCase()) {
          case opt.match(/required/)?.input:
            if (value.trim() === '') {
              status = ValidationType.EMPTY;
              errorText = `${field} is required.`;
            }
            break;
          case opt.match(/email/)?.input:
            if (!validHelper.isEmail(value)) {
              status = ValidationType.INVALID_FORMAT;
              errorText = `${field} is in invalid format.`;
            }
            break;
          case opt.match(/min:\d/)?.input:
            let minimum = opt.substring(4, opt.length)
            if (validHelper.isMinimum(value.trim(), parseInt(minimum))) {
              status = ValidationType.MIN;
              errorText = `${field} must be at least ${minimum} characters or more.`
            }
            break;
          case opt.match(/match:\d/)?.input:
            let comparisonKey = opt.substring(6, opt.length);

            let objectKeys = Object.keys(this.#validators.map((value) => { return value; }));
            let index = objectKeys.indexOf(comparisonKey);
            if (index === -1) {
              status = ValidationType.ERROR;
              errorText = `Error validation field: match.`;
            }
            else {
              let key = Object.keys(this.#validators[index]);
              if (!validHelper.isMatched(value, this.#validators[index][key[0]]['value'])) {
                status = ValidationType.MISMATCH;
                errorText = `${field} and ${noCase(this.#validators[index][key[0]]['field'])} must match.`;
              }
            }

            break;
          // case opt.match(/format/)?.input:
          //   if (!value.isEmail()) { return ErrorType.INVALID_FORMAT; }
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

        if (status !== ValidationType.NONE) {
          break;
        }
      }
    }
    else {
      if (!value) {
        status = ValidationType.EMPTY;
        errorText = `${field} is required.`;
      }
    }

    if (status === ValidationType.NONE) {
      status = ValidationType.VALID;
    }

    return { status, errorText };
  }

  getErrors(): any {
    return this.#validators.reduce((prev, curr) => {
      let key = Object.keys(curr);

      let field = curr[key[0]]['field'];
      let value = curr[key[0]]['value'];
      let validations = curr[key[0]]['validations'];

      let previous = Object.assign({ [key[0]]: this.setError(field, value, validations) }, prev)

      return Object.assign(previous, prev);
    }, {});
  }
}