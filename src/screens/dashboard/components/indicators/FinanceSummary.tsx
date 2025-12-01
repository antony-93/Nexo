import { useFinanceSummaryQuery } from "@/hooks/useReportsQuery";
import { Card, Container } from "@/shared/components";
import { Banknote, Coins, TrendingUp, Wallet } from "lucide-react-native";
import { Text } from "react-native";

export default function FinanceSummary() {
    const { data } = useFinanceSummaryQuery();

    return (
        <Container className="gap-3">
            <Container direction="horizontal" className="gap-3">
                <Card className="flex-1 p-3">
                    <Container direction="horizontal" className="items-center justify-between mb-2">
                        <Text className="text-base text-secondary font-medium">
                            Despesas
                        </Text>

                        <Container className="bg-negative-secondary p-1.5 rounded-md border-negative-primary border-[1px]">
                            <Banknote size={20} color="#EF4444" />
                        </Container>
                    </Container>

                    <Text className="text-2xl font-bold text-negative-primary">
                        -{data?.content?.expenses.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        })}
                    </Text>
                </Card>

                <Card className="flex-1 p-3">
                    <Container direction="horizontal" className="items-center justify-between mb-2">
                        <Text className="text-base text-secondary font-medium">
                            Receitas
                        </Text>

                        <Container className="bg-positive-secondary p-1.5 rounded-md border-positive-primary border-[1px]">
                            <Coins size={20} color="#22C55E" />
                        </Container>
                    </Container>

                    <Text className="text-2xl font-bold text-positive-primary">
                        +{data?.content?.incomes.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        })}
                    </Text>
                </Card>
            </Container>

            <Container direction="horizontal" className="gap-3">
                <Card className="flex-1 p-3">
                    <Container direction="horizontal" className="items-center justify-between mb-2">
                        <Text className="text-base text-content-secondary font-medium">
                            Saldo mensal
                        </Text>

                        <Container className="bg-positive-secondary p-1.5 rounded-md border-positive-primary border-[1px]">
                            <TrendingUp size={20} color="#00A86B" />
                        </Container>
                    </Container>

                    <Text className="text-2xl font-bold text-positive-primary">
                        +{data?.content?.balance.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        })}
                    </Text>
                </Card>

                <Card className="flex-1 p-3">
                    <Container direction="horizontal" className="items-center justify-between mb-2">
                        <Text className="text-base text-secondary font-medium">
                            Saldo atual
                        </Text>

                        <Container className="bg-neutral-secondary p-1.5 rounded-md border-neutral-primary border-[1px]">
                            <Wallet size={20} color="#3B82F6" />
                        </Container>
                    </Container>

                    <Text className="text-2xl font-bold text-primary">
                        {new Number(0).toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        })}
                    </Text>
                </Card>
            </Container>
        </Container>
    );
}