import BillsGroup from "@/entity/BillsGroup";
import { addDoc, collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";
import { db } from "FirebaseConfig";

export default class BillsGroupRepository {
    async insert(billsGroup: Omit<BillsGroup, 'id'>): Promise<string> {
        const docRef = await addDoc(this.getCollection(), billsGroup);
        return docRef.id;
    }

    async list(): Promise<BillsGroup[]> {
        try {
            const docsRef = await getDocs(this.getCollection());

            if (docsRef.empty) return [];
            
            return docsRef.docs.map(this.docToBillsGroupEntity);
        } catch (error) {
            return []
        }
    }

    private docToBillsGroupEntity(doc: QueryDocumentSnapshot): BillsGroup {
        return new BillsGroup(
            doc.id, 
            doc.data().name
        );
    }

    private getCollection() {
        return collection(db, 'billsGroup')
    }
}