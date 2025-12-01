import { Category } from "@/types/Category";
import { zodResolver } from "@hookform/resolvers/zod";
import { createContext, FC, useContext } from "react";
import { Control, useForm, UseFormHandleSubmit } from "react-hook-form";
import { z } from "zod";

const CategorySchema = z.object({
    id: z.string().min(1, "O ID do grupo de contas é obrigatório"),
    description: z.string().min(1, "O nome do grupo de contas é obrigatório")
}) satisfies z.ZodType<Category>;

export const CreateExpensesSchema = z.object({
    description: z.string()
        .min(1, "O nome da conta é obrigatório")
        .max(100, "O nome da conta deve ter no máximo 100 caracteres"),

    amount: z.number()
        .min(0.01, "O valor deve ser maior que zero")
        .positive("O valor deve ser positivo"),

    installments: z.number()
        .int("O número de parcelas deve ser um número inteiro")
        .min(1, "Deve haver pelo menos 1 parcela")
        .max(999, "O número máximo de parcelas é 999"),

    startsIn: z.date({
        message: "A data de início é obrigatória"
    }),

    notes: z.string().max(400, 'A observação deve ter no máximo 400 caracteres').optional(),

    category: CategorySchema
});

export type CreateExpensesSchemaType = z.infer<typeof CreateExpensesSchema>;

type CreateExpensesSchemaContextData = {
    control: Control<CreateExpensesSchemaType>;
    handleSubmit: UseFormHandleSubmit<CreateExpensesSchemaType>;
    setCategory(category: Category): void;
}

const CreateExpensesSchemaContext = createContext<CreateExpensesSchemaContextData | undefined>(undefined);

export const CreateExpensesSchemaProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const {
        setValue, 
        control,
        handleSubmit
    } = useForm<CreateExpensesSchemaType>({
        resolver: zodResolver(CreateExpensesSchema),
        mode: 'onBlur',
        defaultValues: {
            installments: 1,
            description: '',
            amount: 0,
            startsIn: new Date()
        }
    });

    const setCategory = (category: Category) => {
        setValue('category', category);
    };

    return (
        <CreateExpensesSchemaContext.Provider 
            value={{
                control,
                handleSubmit,
                setCategory
            }}
        >
            {children}
        </CreateExpensesSchemaContext.Provider>
    );
}

export const useCreateExpensesSchema = () => {
    const context = useContext(CreateExpensesSchemaContext);
    
    if (!context) {
        throw new Error('useCreateExpensesSchema deve ser usado dentro de um CreateExpensesSchemaProvider');
    }
    
    return context;
};