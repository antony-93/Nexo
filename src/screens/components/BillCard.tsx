import { Card } from "@/shared/components/Card";
import { Container, ContainerProps } from "@/shared/components/Container";
import { cn } from "@/shared/utils/Styles";
import { Bill } from "@/types/Bill";
import { Receipt } from "lucide-react-native";
import { Text } from "react-native";

type BillCardProps = ContainerProps & {
    bill: Omit<Bill, 'id'>
}

export function BillCard({ bill, className, ...props }: BillCardProps) {
    return (
        <Card 
            direction="horizontal" 
            className={cn('items-center gap-3', className)}
            {...props}
        >
            <Container
                className="bg-action-secondary p-1.5 rounded-md border-action-primary border-[1px]"
            >
                <Receipt size={20} color="#6B4EFF" />
            </Container>

            <Text className="flex-1 font-medium">
                {bill.name}
            </Text>

            <Text className="font-semibold text-xl">
                {bill.value.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })}
            </Text>
        </Card>
    );
}