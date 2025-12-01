export type RequestResult<T = void> = {
    content?: T;
    success?: boolean;
    total?: number;
    message?: string;
}

export type ListRequestParams = Record<string, any> & {
    page?: number;
    limit?: number;
    start?: number;
}