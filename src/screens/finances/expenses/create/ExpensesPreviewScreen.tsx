
import { CreateExpensesSchemaType, useCreateExpensesSchema } from "@/context/CreateExpensesSchemaContext";
import { useExpenseGroupMutations } from "@/hooks/useExpenseGroupMutations";
import { useGenerateExpenses } from "@/hooks/useGenerateExpenses";
import { CreateExpensesStackParamList, HomeStackParamList } from "@/routes/types";
import { Button, Container, Section } from "@/shared/components";
import { ExpenseGroup } from "@/types/ExpenseGroup";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CommonActions, CompositeScreenProps } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Receipt } from "lucide-react-native";
import { useCallback } from "react";
import { useWatch } from "react-hook-form";
import { FlatList, Text } from "react-native";
import { ExpenseCard } from "../../../components/ExpenseCard";

type ExpensesPreviewProps = CompositeScreenProps<
    NativeStackScreenProps<CreateExpensesStackParamList, 'ExpensesPreview'>,
    BottomTabScreenProps<HomeStackParamList>
>;

export default function ExpensesPreviewScreen({ navigation }: ExpensesPreviewProps) {
    const { control } = useCreateExpensesSchema();

    const data = useWatch({ control }) as CreateExpensesSchemaType,
        expenses = useGenerateExpenses(data);

    const { mutateAsync, isPending } = useExpenseGroupMutations();

    const handleGenerateExpenses = useCallback(async () => {
        const dto: Omit<ExpenseGroup, 'id'> = {
            description: data.description,
            installments: data.installments,
            expenses
        }

        const result = await mutateAsync(dto);

        if (!result.success) return;

        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'Home' }],
            })
        )
    }, [expenses, mutateAsync, navigation, data]); 

    return (
        <>
            <Container className="mb-4">
                <Text className="text-3xl mb-1 font-bold text-content-primary">
                    Despesas
                </Text>

                <Text className="text-secondary">
                    Lista de despesas a serem geradas
                </Text>
            </Container>

            <Section label={data.category.description} className="flex-1" labelClassName="font-semibold text-content-primary">
                <FlatList
                    bounces={false}
                    data={expenses}
                    contentContainerClassName="gap-3"
                    renderItem={({ item }) => <ExpenseCard expense={item} hiddenDate={false} />}
                />
            </Section>

            <Button
                text="Gerar contas"
                icon={<Receipt size={20} color="#FFFFFF" />}
                loading={isPending}
                onPress={handleGenerateExpenses}
            />
        </>
    );
}