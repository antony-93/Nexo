import Bill from "@/entity/Bill";

export default interface IBillsRepository {
    insertBills(bills: Omit<Bill, 'id'>[]): Promise<string[]> 
}