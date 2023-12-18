import { ValidationType } from "@/models/validation-response";

export interface TextInputField<T> {
  value: T,
  show?: boolean;
  validationType?: ValidationType;
  validationText?: string;
}