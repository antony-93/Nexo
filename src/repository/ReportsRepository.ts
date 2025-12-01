import Repository from "@/shared/infra/Repository";
import { FinanceSummary } from "@/types/FinanceSummary";

class ReportsRepository extends Repository {
    constructor() {
        super('reports')
    }

    getFinanceSummary(params?: Record<string, any>) {
        return this.get<FinanceSummary>('/summary', params);
    }
}

const _reportsRepository = new ReportsRepository();

export default _reportsRepository;