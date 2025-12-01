import _expenseGroupRepository from "@/repository/ExpenseGroupRepository";
import { RequestResult } from "@/shared/types/Request";
import { ExpenseGroup } from "@/types/ExpenseGroup";
import { useQuery } from "@tanstack/react-query";
import { createContext, FC, useContext, useState } from "react";

type LoadExpenseGroupsQueryContextData = {
    setFilters: (filters: Record<string, any>) => void;
    data: RequestResult<ExpenseGroup[]> | undefined;
    isLoading: boolean;
    refetch: () => void;
}

const LoadExpenseGroupsQueryContext = createContext<LoadExpenseGroupsQueryContextData | undefined>(undefined);

export const  LoadExpenseGroupsQueryContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [filters, setFilters] = useState<Record<string, any>>({ date: new Date() });

    const {
        data,
        isPending,
        refetch
    } = useQuery({
        queryKey: ['expense-groups', filters],
        queryFn: () => _expenseGroupRepository.list()
    });

    return (
        <LoadExpenseGroupsQueryContext.Provider
            value={{
                refetch,
                setFilters,
                data,
                isLoading: isPending
            }}
        >
            {children}
        </LoadExpenseGroupsQueryContext.Provider>
    );
}

export const useExpenseGroupsQuery = () => {
    const context = useContext(LoadExpenseGroupsQueryContext);
    
    if (!context) {
        throw new Error('useExpenseGroupsQuery deve ser usado dentro de um LoadExpenseGroupsQueryContextProvider');
    }
    
    return context;
};