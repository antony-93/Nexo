import axios, { AxiosError, type AxiosResponse, isAxiosError } from 'axios';
import type { RequestResult } from "../types/Request";

class Api {
    constructor(private baseURL = process.env.EXPO_PUBLIC_API_URL!) { }

    async get<T>(route: string, params?: Record<string, any>): Promise<RequestResult<T>> {
        try {
            const url = `${this.baseURL}/${route}`;

            const response: AxiosResponse<RequestResult<T>> = await axios.get(url, { params });

            return response.data;
        } catch (e) {
            return this.getGenericResultError(e);
        }
    }

    async put<T>(route: string, data?: any): Promise<RequestResult<T>> {
        try {
            const url = `${this.baseURL}/${route}`;

            const response: AxiosResponse<RequestResult<T>> = await axios.put(url, data);

            return response.data;
        } catch (e) {
            return this.getGenericResultError(e);
        }
    }

    async post<T>(route: string, data?: any): Promise<RequestResult<T>> {
        try {
            const url = `${this.baseURL}/${route}`;

            const response: AxiosResponse<RequestResult<T>> = await axios.post(url, data);

            return response.data;
        } catch (e) {
            return this.getGenericResultError(e);
        }
    }

    private getGenericResultError<T>(error: unknown): RequestResult<T> {
        const result: RequestResult<T> = {
            message: 'Ocorreu um erro não identificado',
            success: false
        }

        if (isAxiosError(error)) {
            const axiosError = error as AxiosError<RequestResult<T>>;

            return axiosError.response?.data || result;
        }

        return result;
    }
}

const api = new Api();

export default api;