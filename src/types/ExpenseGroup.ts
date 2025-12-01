import { Expense } from "./Expense";

export type ExpenseGroup = {
    id: string;
    description: string;
    installments: number;
    expenses: Omit<Expense, 'id' | 'expenseGroupId'>[];
}