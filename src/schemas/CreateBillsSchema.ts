import { BillsGroup } from "@/types/BillsGroup";
import { z } from "zod";

const billsGroupSchema = z.object({
    id: z.string().min(1, "O ID do grupo de contas é obrigatório"),
    name: z.string().min(1, "O nome do grupo de contas é obrigatório"),
    bills: z.array(z.any()).optional()
}) satisfies z.ZodType<BillsGroup>;

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

    billsGroup: billsGroupSchema
});

export type CreateBillsSchema = z.infer<typeof createBillsSchema>;

