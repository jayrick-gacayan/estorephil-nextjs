export enum ResultStatus {
    SUCCESS,
    UNAUTHORIZED,
    REQUEST_TIMEOUT,
    NONE,
    INVALID_REQUEST,
    SERVER_ERROR,
    NOT_FOUND,
    NO_CONTENT,
}
export enum RequestStatus {
    SUCCESS,
    FAILURE,
    IN_PROGRESS,
    WAITING
}
export type ApiResponse = {
    data?: any;
    errors?: any;
    error?: any;
    status?: any;
    message?: string;
    pagination?: any;
}
export const getResultStatus = (statusCode: number) => {
    switch (statusCode) {
        case 200:
            return ResultStatus.SUCCESS;
        case 204:
            return ResultStatus.NO_CONTENT;
        case 400:
            return ResultStatus.INVALID_REQUEST;
        case 401:
            return ResultStatus.UNAUTHORIZED;
        case 403:
            return ResultStatus.UNAUTHORIZED;
        case 404:
            return ResultStatus.NOT_FOUND;
        case 408:
            return ResultStatus.REQUEST_TIMEOUT;
        case 500:
            return ResultStatus.SERVER_ERROR;
        default:
            return ResultStatus.NONE;
    }
}