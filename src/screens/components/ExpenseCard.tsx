
import { ButtonCard, ButtonCardProps, Container } from "@/shared/components";
import { cn } from "@/shared/utils/Styles";
import { Expense } from "@/types/Expense";
import { ChevronDown, Receipt } from "lucide-react-native";
import { Text } from "react-native";

type ExpenseCardProps = ButtonCardProps & {
    expense: Omit<Expense, 'id' | 'categoryId' | 'expenseGroupId'>
    hiddenDate?: boolean
}

export function ExpenseCard({
    expense,
    className,
    hiddenDate = true,
    ...props
}: ExpenseCardProps) {
    return (
        <ButtonCard
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
                    {expense.description}
                </Text>

                {!hiddenDate && (
                    <Text className="text-content-secondary text-sm">
                        {expense.date.toLocaleDateString('pt-BR', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric'
                        })}
                    </Text>
                )}
            </Container>

            <Text className="font-semibold text-xl text-negative-primary">
                -{expense.amount.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })}
            </Text>

            <ChevronDown size={20} color={'#6B7280'} />
        </ButtonCard>
    );
}