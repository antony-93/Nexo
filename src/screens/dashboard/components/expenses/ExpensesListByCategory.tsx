import { useExpensesByCategoryQuery } from "@/context/LoadExpensesByCategoryQueryContext";
import { ExpenseCard } from "@/screens/components/ExpenseCard";
import { Container, SaveButton, Section } from "@/shared/components";
import { TextAreaField } from "@/shared/components/fields";
import { Expense, ExpenseByCategory } from "@/types/Expense";
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { Calendar } from "lucide-react-native";
import { useRef, useState } from "react";
import { FlatList, Keyboard, Pressable, Text } from "react-native";
import { Divider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ExpensesListByCategory() {
    const { data } = useExpensesByCategoryQuery();

    const [expense, setExpense] = useState<Omit<Expense, 'categoryId'>>();

    const bottomSheetExpense = useRef<BottomSheetModal>(null);

    const handleExpense = (expense: Omit<Expense, 'categoryId'>) => {
        setExpense(expense);
        bottomSheetExpense.current?.present();
    }

    const renderItem = (expensesByCategory: ExpenseByCategory) => (
        <Section
            label={expensesByCategory.category}
            labelClassName="font-semibold text-primary"
        >
            <Container className="gap-3">
                {expensesByCategory.expenses?.map(e => (
                    <ExpenseCard key={e.id} expense={e} onPress={() => handleExpense(e)} />
                ))}
            </Container>
        </Section>
    );

    return (
        <>
            <FlatList
                scrollEnabled={false}
                contentContainerClassName="gap-5 mb-2"
                data={data?.content}
                renderItem={({ item }) => renderItem(item!)}
            />

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
                            </Container>
                        </Pressable>
                    </BottomSheetView>
                </SafeAreaView>
            </BottomSheetModal>
        </>
    );
}