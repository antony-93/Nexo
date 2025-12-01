import Repository from "@/shared/infra/Repository";
import { ListRequestParams } from "@/shared/types/Request";
import { Expense, ExpenseByCategory } from "@/types/Expense";

class ExpenseRepository extends Repository<Expense> {
    constructor() {
        super('expenses')
    }

    listByCategory(params: ListRequestParams) {
        return this.list<ExpenseByCategory>('/by-category', params);
    }

    createMultiple(dto: Omit<Expense, 'id'>[]) {
        return this.post<{ ids: string[] }>('/', dto);
    }
}

const _expenseRepository = new ExpenseRepository();

export default _expenseRepository;