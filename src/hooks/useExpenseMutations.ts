import _expenseRepository from "@/repository/ExpenseRepository";
import { Expense } from "@/types/Expense";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useExpenseMutation() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: Omit<Expense, 'id'>[]) => _expenseRepository.createMultiple(data),
        onSuccess(data) {
            if (data.success) {
                queryClient.invalidateQueries({ queryKey: ['expenses-by-category'] });
                queryClient.invalidateQueries({ queryKey: ['financial-summary'] });
            }   
        }
    });
}