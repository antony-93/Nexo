import _categoryRepository from "@/repository/CategoryRepository";
import { useQuery } from "@tanstack/react-query";

export function useCategoryQuery() {
    return useQuery({
        queryKey: ['categories'],
        queryFn: () => _categoryRepository.list()
    });
}