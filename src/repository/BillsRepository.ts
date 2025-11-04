import { RequestResult } from "@/shared/types/Request";
import { FinancialSummary } from "@/types/FinancialSummary";

class BillsRepository {
    async getFinancialSummary(): Promise<RequestResult<FinancialSummary>> {
        return {
            success: true,
            content: {
                monthlyBalance: 750,
                monthlyExpenses: 1250,
                totalBalance: 10000
            }
        };
    }
}

export const billsRepository = new BillsRepository();