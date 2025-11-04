import { Bill } from "./Bill";

export type BillsGroup = {
    id: string;
    name: string;
    bills?: Bill[];
}