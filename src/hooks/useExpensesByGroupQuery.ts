import _expenseGroupRepository from "@/repository/ExpenseGroupRepository";
import { useQuery } from "@tanstack/react-query";

export function useExpensesByGroupQuery(id: string) {
    return useQuery({
        queryKey: ['expense-by-group', id],
        queryFn: () => _expenseGroupRepository.listExpenses(id)
    });
}