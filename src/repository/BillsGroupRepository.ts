import { RequestResult } from "@/shared/types/Request";
import { BillsGroup } from "@/types/BillsGroup";

class BillsGroupRepository {
    async list(): Promise<BillsGroup[]> {
        return [
            {
                id: '1',
                name: 'Contas Pessoais'
            },
            {
                id: '2',
                name: 'Contas da Família'
            },
            {
                id: '3',
                name: 'Contas do Trabalho'
            }
        ];
    }

    async listWithBills(): Promise<RequestResult<BillsGroup[]>> {
        return {
            success: true,
            total: 8,
            content: [
                {
                    id: '1',
                    name: 'Contas Pessoais',
                    bills: [
                        { id: '1', name: 'Conta de Luz', value: 150.00, billsGroupId: '1', paymentDate: new Date() },
                        { id: '2', name: 'Conta de Água', value: 80.00, billsGroupId: '1', paymentDate: new Date() },
                        { id: '3', name: 'Internet', value: 120.00, billsGroupId: '1', paymentDate: new Date() },
                    ]
                },
                {
                    id: '2',
                    name: 'Contas da Família',
                    bills: [
                        { id: '4', name: 'Supermercado', value: 350.00, billsGroupId: '2', paymentDate: new Date() },
                        { id: '5', name: 'Farmácia', value: 45.00, billsGroupId: '2', paymentDate: new Date() },
                        { id: '6', name: 'Combustível', value: 200.00, billsGroupId: '2', paymentDate: new Date() },
                    ]
                },
                {
                    id: '3',
                    name: 'Contas do Trabalho',
                    bills: [
                        { id: '7', name: 'Aluguel do Escritório', value: 800.00, billsGroupId: '3', paymentDate: new Date() },
                        { id: '8', name: 'Telefone Empresarial', value: 95.00, billsGroupId: '3', paymentDate: new Date() },
                    ]
                }
            ]
        }
    }
}

export const billsGroupRepository = new BillsGroupRepository();