export type Expense = {
    id: string;
    categoryId: string;
    expenseGroupId: string;
    amount: number;
    date: Date;
    description: string;
    notes?: string;
}

export type ExpenseByCategory = {
    category: string;
    expenses: Omit<Expense, 'categoryId'>[];
}