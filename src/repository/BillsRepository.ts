import { CreateBillDto } from "@/dto/CreateBillDto";
import Bill from "@/entity/Bill";
import IBillsRepository from "@/interface/BillsRepositoryInterface";
import { addDoc, collection, DocumentReference } from "firebase/firestore";
import { db } from "FirebaseConfig";

export default class BillsRepository implements IBillsRepository {
    async insertBills(bills: CreateBillDto[]): Promise<string[]> {
        try {
            const docRefPromises: Promise<DocumentReference>[] = [];

            console.log(bills)

            for (const bill of bills) {
                console.log(bill)
                docRefPromises.push(
                    addDoc(this.getCollection(), bill)
                );
            }

            const docRefs = await Promise.all(docRefPromises);

            return docRefs.map(docRef => docRef.id);
        } catch (error) {
            console.log(error)
            return []
        }
    }

    async list(): Promise<Bill[]> {
        return [];
    }

    private getCollection() {
        return collection(db, 'bills');
    }
}