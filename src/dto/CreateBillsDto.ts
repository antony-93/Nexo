export default class CreateBillsDto {
    constructor(
        public billsGroupId: string = '',
        public name: string = '',
        public value: string = '',
        public startsIn: Date = new Date(),
        public installments = 1
    ) {}
}