import { useExpensesByCategoryQuery } from "@/context/LoadExpensesByCategoryQueryContext";
import { HomeStackParamList, RootStackParamList } from "@/routes/types";
import { Container, Section } from "@/shared/components";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { CompositeScreenProps } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, Text } from "react-native";
import ActionsList from "./components/actions/ActionsList";
import ExpensesListByCategory from "./components/expenses/ExpensesListByCategory";
import FinanceSummary from "./components/indicators/FinanceSummary";

type DashboardScreenProps = CompositeScreenProps<
    BottomTabScreenProps<HomeStackParamList, 'Dashboard'>,
    NativeStackScreenProps<RootStackParamList>
>;

export default function DashboardScreen({ navigation }: DashboardScreenProps) {
    const { data } = useExpensesByCategoryQuery();

    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const y = e.nativeEvent.contentOffset.y;
        setIsSticky(y > 63);
    };

    return (
        <ScrollView
            stickyHeaderIndices={[1]}
            bounces={false}
            showsVerticalScrollIndicator={false}
            contentContainerClassName="pb-2"
            onScroll={handleScroll}
        >
            <Container direction="horizontal" className="justify-between items-center mb-3 px-6">
                <Container>
                    <Text className="text-3xl mb-1 font-bold text-content-primary">Olá, Antony</Text>
                    <Text className="text-content-secondary">Veja como estão suas finanças hoje</Text>
                </Container>
            </Container>

            <Container
                className="bg-surface-primary"
                style={
                    isSticky && {
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 3 },
                        shadowOpacity: 0.08,
                        shadowRadius: 3,
                    }
                }
            >
                <ActionsList />
            </Container>

            <Container className="gap-4 px-6">
                <Section label="RESUMO FINANCEIRO">
                    <FinanceSummary />
                </Section>

                <Section label={`DESPESAS DO MÊS (${data?.total || 0})`}>
                    <ExpensesListByCategory />
                </Section>
            </Container>
        </ScrollView>
    );
}
