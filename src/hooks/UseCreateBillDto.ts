import { CreateBillDto } from '@/dto/CreateBillDto';
import { CreateBillsSchema } from '@/schemas/CreateBillsSchema';
import { useMemo } from 'react';

export default function useCreateBillDto(schema: CreateBillsSchema) {
    const billsList = useMemo(() => {
        const { name, value, startsIn, installments, billsGroupId } = schema;
        
        const bills: CreateBillDto[] = [];
        
        for (let i = 0; i < installments; i++) {
            const paymentDate = new Date(startsIn);

            paymentDate.setMonth(paymentDate.getMonth() + i);

            const billDto: CreateBillDto = {
                name,
                value,
                paymentDate,
                billsGroupId
            };
            
            bills.push(billDto);
        }
        
        return bills;
    }, [schema]);

    return billsList;
}
