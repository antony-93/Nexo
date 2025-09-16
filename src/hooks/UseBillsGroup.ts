import BillsGroupRepository from "@/repository/BillsGroupRepository";
import { useQuery } from "@tanstack/react-query";

const _billsGroupRep = new BillsGroupRepository();

export function useBillsGroupQuery() {
    return useQuery({
        queryKey: ['billsGroup'],
        queryFn: () => _billsGroupRep.list()
    })
}