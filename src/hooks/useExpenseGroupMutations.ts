import _financeRepository from "@/repository/FinanceRepository";
import { ExpenseGroup } from "@/types/ExpenseGroup";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useExpenseGroupMutations() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: Omit<ExpenseGroup, 'id'>) => _financeRepository.createExpenseGroup(data),
        onSuccess(data) {
            if (data.success) {
                queryClient.invalidateQueries({ queryKey: ['expenses-by-category'] });
                queryClient.invalidateQueries({ queryKey: ['financial-summary'] });
                queryClient.invalidateQueries({ queryKey: ['expense-groups'] });
            }   
        }
    });
}