export default class Bill {
    constructor(
        private id: string,
        public billsGroupId: string,
        public value: number,
        public paymentDate: Date,
        public name: string
    ) {}
}