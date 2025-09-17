export default class CreateBillsDto {
    constructor(
        public billsGroupId: string = '',
        public name: string = '',
        public value: number = 0,
        public startsIn: Date = new Date(),
        public installments: number = 1
    ) {}
}