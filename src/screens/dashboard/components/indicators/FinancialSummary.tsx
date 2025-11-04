import { useFinancialSummary } from "@/hooks/useBillsQuery";
import { Card } from "@/shared/components/Card";
import { Container } from "@/shared/components/Container";
import { PiggyBank, TrendingDown, TrendingUp } from "lucide-react-native";
import { Text } from "react-native";

export default function FinancialSummary() {
    const { data } = useFinancialSummary();

    return (
        <Container className="gap-3">
            <Container direction="horizontal" className="gap-3">
                <Card className="flex-1">
                    <Container direction="horizontal" className="items-center justify-between mb-2">
                        <Text className="text-base text-secondary font-medium">
                            Despesas
                        </Text>

                        <Container className="bg-negative-secondary p-1.5 rounded-md border-negative-primary border-[1px]">
                            <TrendingDown size={20} color="#EF4444" />
                        </Container>
                    </Container>

                    <Text className="text-2xl font-bold text-error">
                        {data?.content?.monthlyExpenses.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        })}
                    </Text>
                </Card>

                <Card className="flex-1">
                    <Container direction="horizontal" className="items-center justify-between mb-2">
                        <Text className="text-base text-secondary font-medium">
                            Saldo do mês
                        </Text>

                        <Container className="bg-positive-secondary p-1.5 rounded-md border-positive-primary border-[1px]">
                            <TrendingUp size={20} color="#22C55E" />
                        </Container>
                    </Container>

                    <Text className="text-2xl font-bold text-primary">
                        {data?.content?.monthlyExpenses.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        })}
                    </Text>
                </Card>
            </Container>

            <Card>
                <Container direction="horizontal" className="items-center justify-between mb-2">
                    <Text className="text-base text-secondary font-medium">
                        Saldo acumulado
                    </Text>

                    <Container
                        className="bg-warning-secondary p-1.5 rounded-md border-warning-primary border-[1px]"
                    >
                        <PiggyBank size={20} color="#FFD60A" />
                    </Container>
                </Container>

                <Text className="text-2xl font-bold text-primary">
                    {data?.content?.totalBalance.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    })}
                </Text>
            </Card>
        </Container>
    );
}