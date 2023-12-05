export enum Result {
    SUCCESS,
    UNAUTHORIZED,
    REQUEST_TIMEOUT,
    NONE,
    INVALID_REQUEST,
    SERVER_ERROR,
    NOT_FOUND,
}
export enum RequestStatus {
    SUCCESS,
    FAILURE,
    IN_PROGRESS,
    WAITING
}
export const getResultStatus = (statusCode: number) => {
    switch (statusCode) {
        case 200:
            return Result.SUCCESS;
        case 400:
            return Result.INVALID_REQUEST;
        case 401:
            return Result.UNAUTHORIZED;
        case 403:
            return Result.UNAUTHORIZED;
        case 404:
            return Result.NOT_FOUND;
        case 408:
            return Result.REQUEST_TIMEOUT;
        case 500:
            return Result.SERVER_ERROR;
        default:
            return Result.NONE;
    }
}