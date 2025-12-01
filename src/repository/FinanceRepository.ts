import Repository from "@/shared/infra/Repository";
import { ExpenseGroup } from "@/types/ExpenseGroup";

class FinanceRepository extends Repository {
    constructor() {
        super('finances')
    }

    createExpenseGroup(dto: Omit<ExpenseGroup, 'id'>) {
        return this.post<{ id: string }>('/expense-group', dto);
    }
}

const _financeRepository = new FinanceRepository();

export default _financeRepository;