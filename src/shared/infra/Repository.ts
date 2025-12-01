import type { ListRequestParams } from "../types/Request";
import api from "./Api";

export default abstract class Repository<Entity = void> {
    constructor(private prefix: string) { }

    protected get<Response>(route: string = '/', params?: Record<string, any>) {
        return api.get<Response>(`${this.prefix}${route}`, params);
    }

    protected post<Response>(route: string = '/', data?: any) {
        return api.post<Response>(`${this.prefix}${route}`, data);
    }

    protected put<Response>(route: string = '/', data?: any) {
        return api.put<Response>(`${this.prefix}${route}`, data);
    }

    list<Response = Entity>(route: string = '/', params?: ListRequestParams) {
        const limit = params?.limit || 25,
            page = params?.page || 1,
            start = (page - 1) * limit;

        const formatedParams = {
            ...params,
            limit,
            page,
            start
        }

        return this.get<Response[]>(route, formatedParams);
    }

    create<Response = { id: string }>(data: Omit<Entity, 'id'>) {
        return this.post<Response>('/', data);
    }
}