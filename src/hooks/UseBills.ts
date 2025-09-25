import { CreateBillDto } from "@/dto/CreateBillDto";
import BillsRepository from "@/repository/BillsRepository";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const _repository = new BillsRepository();

export default function useCreateBillsMutation() {
    const _queryClient = useQueryClient()
    
    return useMutation({
        mutationFn: (dto: CreateBillDto[]) => _repository.insertBills(dto),
        onSuccess: () => {
            _queryClient.refetchQueries({
                queryKey: ['bills']
            })
        }
    })
}