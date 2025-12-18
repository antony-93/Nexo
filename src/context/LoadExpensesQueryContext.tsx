import _expenseRepository from "@/repository/ExpenseRepository";
import { RequestResult } from "@/shared/types/Request";
import { Expense } from "@/types/Expense";
import { useQuery } from "@tanstack/react-query";
import { createContext, FC, useContext, useState } from "react";

type LoadExpensesQueryContextData = {
    setFilters: (filters: Record<string, any>) => void;
    data: RequestResult<Expense[]> | undefined;
    isLoading: boolean;
    refetch: () => void;
}

const LoadExpensesQueryContext = createContext<LoadExpensesQueryContextData | undefined>(undefined);

export const  LoadExpensesQueryContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [filters, setFilters] = useState<Record<string, any>>();

    const {
        data,
        isPending,
        refetch
    } = useQuery({
        queryKey: ['expenses', filters],
        queryFn: () => _expenseRepository.list('/', filters)
    });

    return (
        <LoadExpensesQueryContext.Provider
            value={{
                refetch,
                setFilters,
                data,
                isLoading: isPending
            }}
        >
            {children}
        </LoadExpensesQueryContext.Provider>
    );
}

export const useExpensesQuery = () => {
    const context = useContext(LoadExpensesQueryContext);
    
    if (!context) {
        throw new Error('useExpensesQuery deve ser usado dentro de um LoadExpensesQueryContextProvider');
    }
    
    return context;
};