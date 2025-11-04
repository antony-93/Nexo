export type RequestResult<T> = {
    content?: T;
    success?: boolean;
    total?: number;
    message?: string;
}