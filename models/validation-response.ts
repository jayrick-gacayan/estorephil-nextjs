export enum ValidationType {
    VALID,
    EMPTY,
    INVALID_INPUT,
    INVALID_FORMAT,
    NONE,
}
export type ValidationResponse = {
    status: ValidationType,
    errorText: string,
}