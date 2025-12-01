import _reportsRepository from "@/repository/ReportsRepository";
import { useQuery } from "@tanstack/react-query";

export function useFinanceSummaryQuery() {
    return useQuery({
        queryKey: ['financial-summary'],
        queryFn: () => _reportsRepository.getFinanceSummary({ date: new Date() })
    })
}