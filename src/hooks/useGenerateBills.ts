import { CreateBillsSchema } from "@/schemas/CreateBillsSchema";
import { Bill } from "@/types/Bill";
import { addMonths } from "date-fns";
import { useMemo } from "react";

export function useGenerateBills(data?: CreateBillsSchema) {
    return useMemo<Omit<Bill, 'id'>[]>(() => {
        if (!data) return [];

        return Array.from({ length: data.installments }, (_, i) => {
            return {
                name: data.name,
                value: data.value,
                billsGroupId: data.billsGroup.id,
                paymentDate: addMonths(data.startsIn, i)
            }
        });
    }, [data]);
}