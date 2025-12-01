
import { ButtonCard, ButtonCardProps, Container } from "@/shared/components";
import { cn } from "@/shared/utils/Styles";
import { ExpenseGroup } from "@/types/ExpenseGroup";
import { ChevronRight, Receipt } from "lucide-react-native";
import { Text } from "react-native";

type ExpenseGroupCardProps = ButtonCardProps & {
    expenseGroup: ExpenseGroup
}

export function ExpenseGroupCard({
    expenseGroup,
    className,
    ...props
}: ExpenseGroupCardProps) {
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
                    {expenseGroup.description}
                </Text>
            </Container>

            <ChevronRight size={20} color={'#6B7280'} />
        </ButtonCard>
    );
}