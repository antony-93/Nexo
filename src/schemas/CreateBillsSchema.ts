import { z } from "zod";

export const createBillsSchema = z.object({
    name: z.string()
        .min(1, "O nome da conta é obrigatório")
        .max(100, "O nome da conta deve ter no máximo 100 caracteres"),
    
    value: z.number()
        .min(0.01, "O valor deve ser maior que zero")
        .positive("O valor deve ser positivo"),
    
    installments: z.number()
        .int("O número de parcelas deve ser um número inteiro")
        .min(1, "Deve haver pelo menos 1 parcela")
        .max(999, "O número máximo de parcelas é 999"),
    
    startsIn: z.date({
        message: "A data de início é obrigatória"
    }),

    billsGroupId: z.string()
});

export type CreateBillsSchema = z.infer<typeof createBillsSchema>;

