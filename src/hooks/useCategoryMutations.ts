import _categoryRepository from "@/repository/CategoryRepository";
import { Category } from "@/types/Category";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCategoryMutation() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: Omit<Category, 'id'>) => _categoryRepository.create(data),
        onSuccess(data) {
            if (data.success) {
                queryClient.invalidateQueries({ queryKey: ['categories'] });
            }   
        }
    });
}