import { createBillsSchema, CreateBillsSchema } from "@/schemas/CreateBillsSchema";
import { BillsGroup } from "@/types/BillsGroup";
import { zodResolver } from "@hookform/resolvers/zod";
import { createContext, FC, useContext } from "react";
import { Control, useForm, UseFormHandleSubmit } from "react-hook-form";

type CreateBillsSchemaContextData = {
    control: Control<CreateBillsSchema>;
    handleSubmit: UseFormHandleSubmit<CreateBillsSchema>;
    setBillsGroup(billsGroup: BillsGroup): void;
}

const CreateBillsSchemaContext = createContext<CreateBillsSchemaContextData | undefined>(undefined);

export const CreateBillsSchemaProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const {
        setValue, 
        control,
        handleSubmit
    } = useForm<CreateBillsSchema>({
        resolver: zodResolver(createBillsSchema),
        mode: 'onBlur',
        defaultValues: {
            installments: 1,
            name: '',
            value: 0,
            startsIn: new Date()
        }
    });

    const setBillsGroup = (billsGroup: BillsGroup) => {
        setValue('billsGroup', billsGroup);
    };

    return (
        <CreateBillsSchemaContext.Provider 
            value={{
                control,
                handleSubmit,
                setBillsGroup
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