import { CreateBillsSchema } from "@/schemas/CreateBillsSchema";
import { createContext, FC, useContext, useState } from "react";

type CreateBillsSchemaContextData = {
    createBillsSchema: CreateBillsSchema;
    setBillsGroupId(billsGroupId: string): void;
    setDetails(details: Omit<CreateBillsSchema, 'billsGroupId'>): void;
}

const CreateBillsSchemaContext = createContext<CreateBillsSchemaContextData>({} as CreateBillsSchemaContextData);

export const CreateBillsSchemaProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [
        createBillsSchema, 
        setCreateBillsSchema
    ] = useState<CreateBillsSchema>({
        billsGroupId: '',
        installments: 1,
        name: '',
        value: 0,
        startsIn: new Date()
    });
   
    const setBillsGroupId = (billsGroupId: string) => {
        setCreateBillsSchema({
            ...createBillsSchema,
            billsGroupId
        })
    };

    const setDetails = (details: Omit<CreateBillsSchema, 'billsGroupId'>) => {
        setCreateBillsSchema({
            billsGroupId: createBillsSchema.billsGroupId,
            ...details
        });
    };

    return (
        <CreateBillsSchemaContext.Provider 
            value={{
                createBillsSchema,
                setBillsGroupId,
                setDetails
            }}
        >
            {children}
        </CreateBillsSchemaContext.Provider>
    );
}

export const useCreateBillsSchema = () => useContext(CreateBillsSchemaContext);