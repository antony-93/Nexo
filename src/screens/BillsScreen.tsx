import { Calendar, Plus, TrendingDown, TrendingUp, PiggyBank, User } from "lucide-react-native";
import { useState } from "react";
import { SafeAreaView, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { Menu, MenuItem } from "~/components/Menu";

export default function BillsScreen() {
    const [activeMonth, setActiveMonth] = useState('Setembro')

    const currentMonth = new Date().getMonth();
    
    const remainingMonths = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ].slice(currentMonth);

    // Dados de exemplo para grupos de contas
    const billGroups = [
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

    return (
        <SafeAreaView className="flex-1 bg-background dark:bg-background-dark">
            <View className="px-8 flex-1">
                <View className="justify-between flex-row items-center mb-3">
                    <View className="flex-row items-center">
                        <Calendar size={24} />

                        <Text className="text-3xl font-semibold ml-2">
                            2025
                        </Text>
                    </View>

                    <Menu
                        anchor={<Plus size={24} />}
                    >
                        <MenuItem
                            title="Adicionar conta"
                            onPress={() => {}}
                        />
                    </Menu>
                </View>

                <View className="mb-4">
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} bounces={false}>
                        <View className="flex-row gap-2">
                            {remainingMonths.map(month => (
                                <TouchableOpacity
                                    key={month}
                                    onPress={() => setActiveMonth(month)}
                                    className={`px-4 py-2 rounded-lg border ${
                                        activeMonth === month
                                            ? 'bg-primary border-primary'
                                            : 'bg-surface border-border dark:bg-surface-dark dark:border-border-dark'
                                    }`}
                                >
                                    <Text className={`font-semibold ${
                                        activeMonth === month
                                            ? 'text-white'
                                            : 'text-text-secondary dark:text-text-darkSecondary'
                                    }`}>
                                        {month}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                </View>

                <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
                    {/* Indicadores 2+1 com ícones */}
                    <View className="mb-4">
                        {/* Primeira linha - 2 cards */}
                        <View className="flex-row gap-4 mb-4">
                            {/* Total a Pagar */}
                            <View className="flex-1 bg-error/10 dark:bg-error/20 border border-error/20 dark:border-error/30 rounded-2xl p-4">
                                <View className="flex-row items-center justify-between mb-2">
                                    <Text className="text-text-secondary dark:text-text-darkSecondary text-sm font-medium">
                                        Total a Pagar
                                    </Text>
                                    <TrendingDown size={20} color="#EF4444" />
                                </View>
                                <Text className="text-2xl font-bold text-error">
                                    R$ 1.250,00
                                </Text>
                            </View>

                            {/* Sobrou */}
                            <View className="flex-1 bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 rounded-2xl p-4">
                                <View className="flex-row items-center justify-between mb-2">
                                    <Text className="text-text-secondary dark:text-text-darkSecondary text-sm font-medium">
                                        Sobrou
                                    </Text>
                                    <TrendingUp size={20} color="#22C55E" />
                                </View>
                                <Text className="text-2xl font-bold text-primary">
                                    R$ 750,00
                                </Text>
                            </View>
                        </View>

                        {/* Segunda linha - card do porquinho 100% largura */}
                        <View>
                            {/* Guardado */}
                            <View className="bg-secondary/10 dark:bg-secondary/20 border border-secondary/20 dark:border-secondary/30 rounded-2xl p-4">
                                <View className="flex-row items-center justify-between mb-2">
                                    <Text className="text-text-secondary dark:text-text-darkSecondary text-sm font-medium">
                                        Guardado
                                    </Text>
                                    <PiggyBank size={20} color="#10B981" />
                                </View>
                                <Text className="text-2xl font-bold text-secondary">
                                    R$ 500,00
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Lista agrupada de contas */}
                    <View className="mt-6">
                        {billGroups.map((group) => (
                            <View key={group.id} className="mb-6">
                                {/* Cabeçalho do grupo */}
                                <View className="flex-row items-center mb-3">
                                    <User size={20} color="#6B7280" />
                                    <Text className="text-text-secondary dark:text-text-darkSecondary text-base font-medium ml-2">
                                        {group.name}
                                    </Text>
                                </View>

                                {/* Lista de contas do grupo */}
                                <View className="gap-4">
                                    {group.bills.map((bill) => (
                                        <TouchableOpacity
                                            key={bill.id}
                                            className={`bg-surface dark:bg-surface-dark border rounded-xl p-4 ${
                                                bill.paid 
                                                    ? 'border-primary/30 bg-primary/5' 
                                                    : 'border-border dark:border-border-dark'
                                            }`}
                                        >
                                            <View className="flex-row items-center justify-between">
                                                <View className="flex-1">
                                                    <Text className={`text-base font-medium ${
                                                        bill.paid 
                                                            ? 'text-text-secondary dark:text-text-darkSecondary line-through' 
                                                            : 'text-text dark:text-text-dark'
                                                    }`}>
                                                        {bill.name}
                                                    </Text>
                                                    {bill.paid && (
                                                        <Text className="text-primary text-sm font-medium mt-1">
                                                            Pago
                                                        </Text>
                                                    )}
                                                </View>
                                                <Text className={`text-lg font-bold ${
                                                    bill.paid 
                                                        ? 'text-text-secondary dark:text-text-darkSecondary' 
                                                        : 'text-text dark:text-text-dark'
                                                }`}>
                                                    R$ {bill.value.toFixed(2).replace('.', ',')}
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </View>
                        ))}
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    );
}