import z from "zod";

export const createBillsSchema = z.object({
    name: z.string().min(1, 'Nome é obrigatório').max(100, 'Nome deve ter no máximo 100 caracteres'),
    value: z.number().min(0.01, 'Valor deve ser maior que zero'),
    startsIn: z.date({
        message: 'Data de início é obrigatória',
    }),
    installments: z.number().min(1, 'Deve ter pelo menos 1 parcela'),
    billsGroupId: z.string().min(1, "Selecione um grupo")
});

export type CreateBillsSchema = z.infer<typeof createBillsSchema>;