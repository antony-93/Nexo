import Bill from "@/entity/Bill";
import { addDoc, collection, DocumentReference } from "firebase/firestore";
import { db } from "FirebaseConfig";

export default class BillsRepository {
    async insertBills(bills: Omit<Bill, 'id'>[]): Promise<string[]> {
        const docRefPromises: Promise<DocumentReference>[] = [];

        for (const bill of bills) {
            docRefPromises.push(
                addDoc(this.getCollection(), bill)
            );
        }

        const docRefs = await Promise.all(docRefPromises);

        return docRefs.map(docRef => docRef.id);
    }

    async list(): Promise<Bill[]> {
        return [];
    }

    private getCollection() {
        return collection(db, 'bills');
    }
}