import BillsGroup from "@/entity/BillsGroup";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "FirebaseConfig";

export default class BillsGroupRepository {
    async insert(billsGroup: Omit<BillsGroup, 'id'>): Promise<string> {
        const docRef = await addDoc(this.getCollection(), billsGroup);
        return docRef.id;
    }

    async list(): Promise<BillsGroup[]> {
        try {
            console.log('AQUI')
            const docsRef = await getDocs(this.getCollection());
            
            console.log('AQUI', docsRef)
    
            if (docsRef.empty) return [];
            
            return docsRef.docs.map(doc => doc.data() as BillsGroup);
        } catch (error) {
            return []
        }
    }

    private getCollection() {
        return collection(db, 'billsGroup')
    }
}