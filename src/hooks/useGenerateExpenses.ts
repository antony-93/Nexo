import { CreateExpensesSchemaType } from "@/context/CreateExpensesSchemaContext";
import { Expense } from "@/types/Expense";
import { addMonths } from "date-fns";
import { useMemo } from "react";

export function useGenerateExpenses(data?: CreateExpensesSchemaType) {
    return useMemo<Omit<Expense, 'id' | 'expenseGroupId'>[]>(() => {
        if (!data) return [];

        return Array.from({ length: data.installments }, (_, i) => {
            return {
                notes: data.notes,
                description: data.description,
                amount: data.amount,
                categoryId: data.category.id,
                date: addMonths(data.startsIn, i)
            }
        });
    }, [data]);
}