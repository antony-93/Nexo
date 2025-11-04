import { billsGroupRepository } from "@/repository/BillsGroupRepository";
import { useQuery } from "@tanstack/react-query";

export function useBillsGroupQuery() {
    return useQuery({
        queryKey: ['billsGroup'],
        queryFn: billsGroupRepository.list
    })
}

export function useBillsGroupWithBillsQuery() {
    return useQuery({
        queryKey: ['billsGroupWithBills'],
        queryFn: billsGroupRepository.listWithBills
    });
}