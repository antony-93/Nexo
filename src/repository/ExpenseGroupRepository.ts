import Repository from "@/shared/infra/Repository";
import { Expense } from "@/types/Expense";
import { ExpenseGroup } from "@/types/ExpenseGroup";

class ExpenseGroupRepository extends Repository<ExpenseGroup> {
    constructor() {
        super('expensegroups')
    }

    listExpenses(id: string) {
        return this.list<Expense>(`${id}/expenses`);
    }
}

const _expenseGroupRepository = new ExpenseGroupRepository();

export default _expenseGroupRepository;