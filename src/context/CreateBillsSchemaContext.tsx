import { createBillsSchema, CreateBillsSchema } from "@/schemas/CreateBillsSchema";
import { Bill } from "@/types/Bill";
import { generateBills } from "@/utils/generateBills";
import { zodResolver } from "@hookform/resolvers/zod";
import { createContext, FC, useContext, useState } from "react";
import { Control, useForm, UseFormHandleSubmit } from "react-hook-form";

type CreateBillsSchemaContextData = {
    createBillsSchema: CreateBillsSchema;
    control: Control<CreateBillsSchema>;
    handleSubmit: UseFormHandleSubmit<CreateBillsSchema>;
    bills: Omit<Bill, 'id'>[];
    generateBillsFromForm(data: CreateBillsSchema): void;
    setBillsGroupId(billsGroupId: string): void;
}

const CreateBillsSchemaContext = createContext<CreateBillsSchemaContextData | undefined>(undefined);

export const CreateBillsSchemaProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [bills, setBills] = useState<Omit<Bill, 'id'>[]>([]);

    const {
        watch, 
        setValue, 
        control,
        handleSubmit
    } = useForm<CreateBillsSchema>({
        resolver: zodResolver(createBillsSchema),
        mode: 'onBlur',
        defaultValues: {
            billsGroupId: '',
            installments: 1,
            name: '',
            value: 0,
            startsIn: new Date()
        }
    });

    const setBillsGroupId = (billsGroupId: string) => {
        setValue('billsGroupId', billsGroupId);
    };
    
    const generateBillsFromForm = (data: CreateBillsSchema) => {
        const generatedBills = generateBills(data);
        setBills(generatedBills);
    };

    return (
        <CreateBillsSchemaContext.Provider 
            value={{
                createBillsSchema: watch(),
                control,
                handleSubmit,
                bills,
                generateBillsFromForm,
                setBillsGroupId
            }}
        >
            {children}
        </CreateBillsSchemaContext.Provider>
    );
}

export const useCreateBillsSchema = () => {
    const context = useContext(CreateBillsSchemaContext);
    
    if (!context) {
        throw new Error('useCreateBillsSchema deve ser usado dentro de um CreateBillsSchemaProvider');
    }
    
    return context;
};