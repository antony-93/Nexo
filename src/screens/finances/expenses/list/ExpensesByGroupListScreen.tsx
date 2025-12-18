import { useExpensesQuery } from "@/context/LoadExpensesQueryContext";
import { RootStackParamList } from "@/routes/types";
import { ExpenseCard } from "@/screens/components/ExpenseCard";
import { Container, DeleteButton, GoBackBar, Menu, MenuItem, SaveButton } from "@/shared/components";
import { TextAreaField } from "@/shared/components/fields";
import { Expense } from "@/types/Expense";
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Calendar, MoreHorizontal } from "lucide-react-native";
import { useEffect, useRef, useState } from "react";
import { FlatList, Keyboard, Pressable, ScrollView, Text } from "react-native";
import { Divider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

type ExpensesByGroupListScreenProps = NativeStackScreenProps<RootStackParamList, 'ExpenseByGroupList'>;

export default function ExpensesByGroupListScreen({ route }: ExpensesByGroupListScreenProps) {
    const { expenseGroupId } = route.params;

    const { data, setFilters } = useExpensesQuery();

    const [expense, setExpense] = useState<Omit<Expense, 'categoryId'>>();

    const bottomSheetExpense = useRef<BottomSheetModal>(null);

    const handleExpense = (expense: Omit<Expense, 'categoryId'>) => {
        setExpense(expense);
        bottomSheetExpense.current?.present();
    }

    useEffect(() => {
        setFilters({ expenseGroupId });
    }, [expenseGroupId, setFilters]);

    return (
        <SafeAreaView className='flex-1 bg-surface-primary'>
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                stickyHeaderIndices={[0]}
            >
                <Container direction="horizontal" className="justify-between items-center bg-surface-primary pb-4">
                    <Container className="flex-1">
                        <GoBackBar title='Voltar' className='mb-1 px-2 w-full' />
                        <Container className="px-6">
                            <Text className="text-3xl mb-1 font-bold text-content-primary">Despesas</Text>
                            <Text className="text-content-secondary">Despesas restantes</Text>
                        </Container>
                    </Container>

                    <Container className="px-6">
                        <Menu anchor={<MoreHorizontal size={24} color="#6B7280" />}>
                            <MenuItem
                                className="text-negative-primary"
                                title="Excluir despesas"
                                onPress={() => { }}
                            />
                        </Menu>
                    </Container>
                </Container>

                <FlatList
                    contentContainerClassName="gap-5 mb-2 px-6"
                    data={data?.content}
                    scrollEnabled={false}
                    renderItem={({ item }) => <ExpenseCard expense={item} onPress={() => handleExpense(item)} />}
                />
            </ScrollView>

            <BottomSheetModal
                backgroundStyle={{
                    backgroundColor: '#ffffff'
                }}
                backdropComponent={(props) => (
                    <BottomSheetBackdrop
                        appearsOnIndex={0}
                        disappearsOnIndex={-1}
                        opacity={0.5}
                        {...props}
                    />
                )}
                keyboardBehavior="interactive"
                keyboardBlurBehavior="restore"
                ref={bottomSheetExpense}
                snapPoints={['1%']}
                index={1}
            >
                <SafeAreaView className='h-full' edges={['bottom', 'left', 'right']}>
                    <BottomSheetView className="pb-8">
                        <Pressable onPress={Keyboard.dismiss}>
                            <Container className="px-6 gap-4">
                                <Container>
                                    <Text className="text-xl font-medium">{expense?.description}</Text>

                                    <Text className="text-2xl font-semibold  text-negative-primary">
                                        -{expense?.amount?.toLocaleString('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        })}
                                    </Text>
                                </Container>

                                <Divider />

                                <Container direction="horizontal" className="items-center gap-3">
                                    <Calendar size={28} color={'#1A1A1A'} />

                                    <Container>
                                        <Text className="text-content-secondary font-medium text-base">
                                            Data de pagamento
                                        </Text>

                                        <Text className="text-content-primary font-medium text-lg">
                                            {expense?.date && new Date(expense.date).toLocaleDateString('pt-BR', {
                                                day: '2-digit',
                                                month: '2-digit',
                                                year: 'numeric'
                                            })}
                                        </Text>
                                    </Container>
                                </Container>

                                <Divider />

                                <TextAreaField
                                    label="Observação (opcional)"
                                    value={expense?.notes}
                                    className="mb-1"
                                />

                                <SaveButton />

                                <DeleteButton />
                            </Container>
                        </Pressable>
                    </BottomSheetView>
                </SafeAreaView>
            </BottomSheetModal>
        </SafeAreaView>
    );
}