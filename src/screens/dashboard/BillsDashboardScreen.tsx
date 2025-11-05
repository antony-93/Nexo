import { useBillsGroupWithBillsQuery } from "@/hooks/useBillsGroupQuery";
import { RootStackParamList } from "@/routes/types";
import { Card, Container, Menu, MenuItem, Section } from "@/shared/components";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Calendar, ChevronDown, Plus, SlidersHorizontal } from "lucide-react-native";
import { useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BillsList from "./components/billslist/BillsList";
import FinancialSummary from "./components/indicators/FinancialSummary";

type BillsDashboardScreenProps = NativeStackScreenProps<RootStackParamList, 'BillsDashboard'>;

export default function BillsDashboardScreen({ navigation }: BillsDashboardScreenProps) {
    const { data } = useBillsGroupWithBillsQuery();

    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const y = e.nativeEvent.contentOffset.y;
        setIsSticky(y > 63);
    };

    return (
        <SafeAreaView className="flex-1">
            <ScrollView
                stickyHeaderIndices={[1]}
                bounces={false}
                showsVerticalScrollIndicator={false}
                onScroll={handleScroll}
            >
                <Container direction="horizontal" className="justify-between items-center mb-3 px-6">
                    <Container>
                        <Text className="text-3xl mb-1 font-bold text-content-primary">Olá, Antony</Text>
                        <Text className="text-content-secondary">Veja como estão suas finanças hoje</Text>
                    </Container>

                    <Menu anchor={<Plus size={24} color="#6B7280" />}>
                        <MenuItem
                            title="Adicionar conta"
                            onPress={() => navigation.navigate('CreateBills')}
                        />
                    </Menu>
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
                    <ScrollView
                        horizontal
                        contentContainerClassName="gap-2 mb-3 items-center px-6"
                        showsHorizontalScrollIndicator={false}
                        bounces={false}
                    >
                        <Card direction="horizontal" className="bg-action-primary items-center gap-2">
                            <Calendar size={18} color="#FFFFFF" strokeWidth={2} />
                            <Text className="text-base text-white font-semibold">2025</Text>
                            <ChevronDown size={18} color="#FFFFFF" strokeWidth={2} />
                        </Card>

                        <Card direction="horizontal" className="items-center gap-2">
                            <Text className="text-base text-content-primary font-semibold">Outubro</Text>
                            <ChevronDown size={18} color="#1A1A1A" strokeWidth={2} />
                        </Card>

                        <Card direction="horizontal" className="items-center gap-2">
                            <Text className="text-base text-content-primary font-semibold">Ordenar</Text>
                            <ChevronDown size={18} color="#1A1A1A" strokeWidth={2} />
                        </Card>

                        <Card direction="horizontal" className="items-center gap-2">
                            <Text className="text-base text-content-primary font-semibold">Filtros</Text>
                            <SlidersHorizontal size={18} color="#1A1A1A" strokeWidth={2} />
                        </Card>
                    </ScrollView>
                </Container>

                <Container className="gap-4 px-6">
                    <Section label="RESUMO FINANCEIRO">
                        <FinancialSummary />
                    </Section>

                    <Section label={`CONTAS DO MÊS (${data?.total})`}>
                        <BillsList />
                    </Section>
                </Container>
            </ScrollView>
        </SafeAreaView>
    );
}
