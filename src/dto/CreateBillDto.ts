export type CreateBillDto = {
    name: string,

    value: number,
    
    paymentDate: Date,
    
    billsGroupId: string
}