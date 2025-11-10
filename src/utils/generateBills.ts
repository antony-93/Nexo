import { CreateBillsSchema } from "@/schemas/CreateBillsSchema";
import { Bill } from "@/types/Bill";
import { addMonths } from "date-fns";

export function generateBills(data: CreateBillsSchema) {
    const { name, value, installments, startsIn, billsGroupId } = data;
    
    const bills: Omit<Bill, 'id'>[] = [];
    const valuePerInstallment = value / installments;

    for (let i = 0; i < installments; i++) {
        const paymentDate = addMonths(startsIn, i);
        const installmentNumber = i + 1;
        
        // Se houver mais de uma parcela, adiciona o número da parcela ao nome
        const billName = installments > 1 
            ? `${name} - Parcela ${installmentNumber}/${installments}`
            : name;

        bills.push({
            billsGroupId,
            value: valuePerInstallment,
            paymentDate,
            name: billName
        });
    }

    return bills;
}

