import _expenseRepository from "@/repository/ExpenseRepository";
import { RequestResult } from "@/shared/types/Request";
import { ExpenseByCategory } from "@/types/Expense";
import { useQuery } from "@tanstack/react-query";
import { createContext, FC, useContext, useState } from "react";

type LoadExpensesByCategoryQueryContextData = {
    setFilters: (filters: Record<string, any>) => void;
    data: RequestResult<ExpenseByCategory[]> | undefined;
    isLoading: boolean;
    refetch: () => void;
}

const LoadExpensesByCategoryQueryContext = createContext<LoadExpensesByCategoryQueryContextData | undefined>(undefined);

export const  LoadExpensesByCategoryQueryContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [filters, setFilters] = useState<Record<string, any>>({ date: new Date() });

    const {
        data,
        isPending,
        refetch
    } = useQuery({
        queryKey: ['expenses-by-category', filters],
        queryFn: () => _expenseRepository.listByCategory(filters)
    });

    return (
        <LoadExpensesByCategoryQueryContext.Provider
            value={{
                refetch,
                setFilters,
                data,
                isLoading: isPending
            }}
        >
            {children}
        </LoadExpensesByCategoryQueryContext.Provider>
    );
}

export const useExpensesByCategoryQuery = () => {
    const context = useContext(LoadExpensesByCategoryQueryContext);
    
    if (!context) {
        throw new Error('useExpensesByCategoryQuery deve ser usado dentro de um LoadExpensesByCategoryQueryContextProvider');
    }
    
    return context;
};