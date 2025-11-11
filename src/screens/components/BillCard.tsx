import { Card } from "@/shared/components/Card";
import { Container, ContainerProps } from "@/shared/components/Container";
import { cn } from "@/shared/utils/Styles";
import { Bill } from "@/types/Bill";
import { Receipt } from "lucide-react-native";
import { Text } from "react-native";

type BillCardProps = ContainerProps & {
    bill: Omit<Bill, 'id'>
    hiddenPaymentDate?: boolean
}

export function BillCard({
    bill,
    className,
    hiddenPaymentDate = true,
    ...props
}: BillCardProps) {
    return (
        <Card
            direction="horizontal"
            className={cn('items-center gap-3', className)}
            {...props}
        >
            <Container
                className="bg-action-secondary p-1.5 rounded-md border-action-primary border-[1px]"
            >
                <Receipt size={24} color="#6B4EFF" />
            </Container>

            <Container className="flex-1">
                <Text className="font-medium">
                    {bill.name}
                </Text>

                {!hiddenPaymentDate && (
                    <Text className="text-content-secondary text-sm">
                        {bill.paymentDate.toLocaleDateString('pt-BR', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric'
                        })}
                    </Text>
                )}
            </Container>

            <Text className="font-semibold text-xl">
                {bill.value.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })}
            </Text>
        </Card>
    );
}