import { ValidationType } from "@/models/validation-response";
import { ValidationResponse } from "./validation-response";

export interface TextInputField<T> extends ValidationResponse {
  value: T,
  show?: boolean;
  status: ValidationType
  errorText: string;
}