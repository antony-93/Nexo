import Salary from "@/entity/Salary";
import { addDoc, collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "FirebaseConfig";

export default class SalaryRepository {
    async insert(salary: Salary): Promise<string> {
        const docRef = await addDoc(this.getCollection(), salary);
        return docRef.id;
    }

    async getCurrent(): Promise<Salary | null> {
        const q = query(
            this.getCollection(),
            orderBy('createdAt', 'desc'),
            limit(1)
        );

        const [doc] = (await getDocs(q)).docs;

        return doc ? doc.data() as Salary : null;
    }

    private getCollection() {
        return collection(db, 'salary')
    }
}