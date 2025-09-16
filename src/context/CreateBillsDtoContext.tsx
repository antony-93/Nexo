import CreateBillsDto from "@/dto/CreateBillsDto";
import { createContext, FC, useContext, useState } from "react";

type CreateBillsDtoContextData = {
    createBillsDto: CreateBillsDto;
    setBillsGroupId(billsGroupId: string): void;
    setDetails(details: Omit<CreateBillsDto, 'billsGroupId'>): void;
}

const CreateBillsDtoContext = createContext<CreateBillsDtoContextData>({} as CreateBillsDtoContextData);

export const CreateBillsDtoProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [
        createBillsDto, 
        setCreateBillsDto
    ] = useState<CreateBillsDto>(new CreateBillsDto());
   
    const setBillsGroupId = (billsGroupId: string) => {
        setCreateBillsDto({
            ...createBillsDto,
            billsGroupId
        })
    };

    const setDetails = (details: Omit<CreateBillsDto, 'billsGroupId'>) => {
        setCreateBillsDto({
            ...createBillsDto,
            ...details
        });
    };

    return (
        <CreateBillsDtoContext.Provider 
            value={{
                createBillsDto,
                setBillsGroupId,
                setDetails
            }}
        >
            {children}
        </CreateBillsDtoContext.Provider>
    );
}

export const useCreateBillsDto = () => useContext(CreateBillsDtoContext);