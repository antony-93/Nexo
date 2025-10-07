import { Card } from "@/components/ui/Card";
import { Menu, MenuItem } from "@/components/ui/Menu";
import { useNavigation } from "@react-navigation/native";
import { Calendar, ChevronDown, PiggyBank, Plus, Receipt, TrendingDown, TrendingUp } from "lucide-react-native";
import { ScrollView, Text, View, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BillsScreen() {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';

    const billsGroups = [
        {
            id: 1,
            name: 'Contas Pessoais',
            bills: [
                { id: 1, name: 'Conta de Luz', value: 150.00, paid: false },
                { id: 2, name: 'Conta de Água', value: 80.00, paid: true },
                { id: 3, name: 'Internet', value: 120.00, paid: false },
            ]
        },
        {
            id: 2,
            name: 'Contas da Família',
            bills: [
                { id: 4, name: 'Supermercado', value: 350.00, paid: false },
                { id: 5, name: 'Farmácia', value: 45.00, paid: true },
                { id: 6, name: 'Combustível', value: 200.00, paid: false },
            ]
        },
        {
            id: 3,
            name: 'Contas do Trabalho',
            bills: [
                { id: 7, name: 'Aluguel do Escritório', value: 800.00, paid: false },
                { id: 8, name: 'Telefone Empresarial', value: 95.00, paid: true },
            ]
        }
    ];

    const navigation = useNavigation<any>();

    return (
        <SafeAreaView className="flex-1 px-6 bg-primary">
            <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
                <View className="justify-between flex-row items-center mb-4">
                    <View>
                        <Text className="text-3xl mb-1 font-bold text-primary">
                            Bom dia, Antony
                        </Text>

                        <Text className="text-secondary">
                            Veja como estão suas finanças hoje
                        </Text>
                    </View>

                    <Menu
                        anchor={
                            <Plus
                                size={24}
                                color={isDark ? "#9CA3AF" : "#6B7280"}
                            />
                        }
                    >
                        <MenuItem
                            title="Adicionar conta"
                            onPress={() => navigation.navigate('CreateBillsRouter')}
                        />
                    </Menu>
                </View>

                <ScrollView
                    horizontal
                    contentContainerClassName="gap-2 mb-3"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                >
                    <Card className="bg-action-primary flex-row items-center gap-2 shadow-cardaction">
                        <Calendar size={18} color="#FFFFFF" strokeWidth={2} />

                        <Text className="text-base text-white font-semibold">
                            2025
                        </Text>

                        <ChevronDown size={18} color="#FFFFFF" strokeWidth={2} />
                    </Card>

                    <Card className="flex-row items-center gap-2">
                        <Text className="text-base text-primary font-semibold">
                            Outubro
                        </Text>

                        <ChevronDown size={18} color="#1A1A1A" strokeWidth={2} />
                    </Card>
                </ScrollView>

                <Text className="text-secondary text-base font-medium mb-3 tracking-wider">
                    RESUMO FINANCEIRO
                </Text>

                <View className="flex-row gap-3 mb-3">
                    <Card className="flex-1">
                        <View className="flex-row items-center justify-between mb-2">
                            <Text className="text-base text-secondary font-medium">
                                Despesas
                            </Text>

                            <View className="bg-negative-secondary p-1.5 rounded-md border-negative-primary border-[1px]">
                                <TrendingDown size={20} color="#EF4444" />
                            </View>
                        </View>

                        <Text className="text-2xl font-bold text-error">
                            R$ 1.250,00
                        </Text>
                    </Card>

                    <Card className="flex-1">
                        <View className="flex-row items-center justify-between mb-2">
                            <Text className="text-base text-secondary font-medium">
                                Saldo do mês
                            </Text>

                            <View className="bg-positive-secondary p-1.5 rounded-md border-positive-primary border-[1px]">
                                <TrendingUp size={20} color="#22C55E" />
                            </View>
                        </View>

                        <Text className="text-2xl font-bold text-primary">
                            R$ 750,00
                        </Text>
                    </Card>
                </View>

                <Card className="mb-4">
                    <View className="flex-row items-center justify-between mb-2">
                        <Text className="text-base text-secondary font-medium">
                            Saldo acumulado
                        </Text>

                        <View
                            className="bg-warning-secondary p-1.5 rounded-md border-warning-primary border-[1px]"
                        >
                            <PiggyBank size={20} color="#FFD60A" />
                        </View>
                    </View>

                    <Text className="text-2xl font-bold text-primary">
                        R$ 10.000,00
                    </Text>
                </Card>

                <Text className="text-secondary text-base font-medium mb-3 tracking-wider">
                    CONTAS DO MÊS (15)
                </Text>

                <View className="gap-4">
                    {billsGroups.map(group => (
                        <View key={group.id}>
                            <Text className="text-base font-semibold text-primary mb-2">
                                {group.name}
                            </Text>

                            <View className="gap-4">
                                {group.bills.map(bill => (
                                    <Card key={bill.id} className="flex-row items-center gap-4">
                                        <View
                                            className="bg-action-secondary p-1.5 rounded-md border-action-primary border-[1px]"
                                        >
                                            <Receipt size={20} color="#6B4EFF" />
                                        </View>

                                        <Text className="flex-1 font-medium">
                                            {bill.name}
                                        </Text>

                                        <Text className="font-semibold text-xl">
                                            R$ {bill.value},00
                                        </Text>
                                    </Card>
                                ))}
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}