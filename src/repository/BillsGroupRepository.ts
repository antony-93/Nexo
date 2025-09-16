import BillsGroup from "@/entity/BillsGroup";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "FirebaseConfig";

export default class BillsGroupRepository {
    async insert(billsGroup: Omit<BillsGroup, 'id'>): Promise<string> {
        const docRef = await addDoc(this.getCollection(), billsGroup);
        return docRef.id;
    }

    async list(): Promise<BillsGroup[]> {
        const docsRef = await getDocs(this.getCollection());
        
        if (docsRef.empty) return [];
        
        return docsRef.docs.map(doc => doc.data() as BillsGroup);
    }

    private getCollection() {
        return collection(db, 'billsGroup')
    }
}