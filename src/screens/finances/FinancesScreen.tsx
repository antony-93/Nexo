import { HomeStackParamList, RootStackParamList } from "@/routes/types";
import { Container, Menu, MenuItem, Tabs, TabScreen } from "@/shared/components";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { CompositeScreenProps } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Plus } from "lucide-react-native";
import { ScrollView, Text } from "react-native";
import ExpenseGroupsList from "./components/expensegroups/ExpenseGroupsList";

type FinancesScreenProps = CompositeScreenProps<
    BottomTabScreenProps<HomeStackParamList, 'Finances'>,
    NativeStackScreenProps<RootStackParamList>
>;

export default function FinancesScreen({ navigation }: FinancesScreenProps) {
    return (
        <ScrollView
            stickyHeaderIndices={[1]}
            bounces={false}
            showsVerticalScrollIndicator={false}
            contentContainerClassName="pb-2"
        >
            <Container direction="horizontal" className="justify-between items-center mb-3 px-6">
                <Container>
                    <Text className="text-3xl mb-1 font-bold text-content-primary">Finanças</Text>
                    <Text className="text-content-secondary">Gerencie suas despesas e receitas futuras</Text>
                </Container>

                <Menu anchor={<Plus size={24} color="#6B7280" />}>
                    <MenuItem
                        title="Adicionar despesa"
                        onPress={() => navigation.navigate('CreateExpenses')}
                    />

                    <MenuItem
                        title="Adicionar receita"
                        onPress={() => navigation.navigate('CreateExpenses')}
                    />
                </Menu>
            </Container>

            <Container className="px-6">
                <Tabs>
                    <TabScreen name="Despesas">
                        <ExpenseGroupsList />
                    </TabScreen>

                    <TabScreen name="Receitas">
                        <ExpenseGroupsList />
                    </TabScreen>
                </Tabs>
            </Container>
        </ScrollView>
    );
}
