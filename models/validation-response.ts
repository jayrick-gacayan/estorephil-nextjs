export enum ValidationStatus {
    VALID,
    EMPTY,
    INVALID_FORMAT,
    NONE,
}
export type ValidationResponse = {
    status: ValidationStatus,
    errorText: string,
}