import { billsRepository } from "@/repository/BillsRepository";
import { useQuery } from "@tanstack/react-query";

export function useFinancialSummary() {
    return useQuery({
        queryKey: ['financialSummary'],
        queryFn: billsRepository.getFinancialSummary
    })
}