export type RootStackParamList = {
    Home: undefined
    CreateExpenses: undefined;
    CreateCategory: undefined;
    ExpenseByGroupList: { groupId: string };
}

export type CreateExpensesStackParamList = {
    SelectCategory: undefined;
    ExpenseForm: undefined;
    ExpensesPreview: undefined;
}

export type CreateCategoryStackParamList = {
    CategoryForm: undefined;
}

export type HomeStackParamList = {
    Dashboard: undefined;
    Finances: undefined;
    Settings: undefined;
}