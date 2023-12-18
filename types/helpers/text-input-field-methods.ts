import { ValidationType } from "../enums/validation-type";
import { TextInputField } from "../props/text-input-field";

export function textInputFieldValue<T>(value: T, show?: boolean): TextInputField<T> {
  return {
    value: value,
    show: show,
    validationType: ValidationType.NONE,
    validationText: ''
  }
}