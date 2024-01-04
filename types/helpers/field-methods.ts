import { Paginated } from "@/models/paginated";
import { ValidationType } from "../enums/validation-type";
import { TextInputField } from "../props/text-input-field";

export function textInputFieldValue<T>(value: T, show?: boolean): TextInputField<T> {
  return {
    value: value,
    show: show,
    status: ValidationType.NONE,
    errorText: ''
  }
}

export function paginatedInit<T>(value: Paginated<T>): Paginated<T> {
  return value;
}