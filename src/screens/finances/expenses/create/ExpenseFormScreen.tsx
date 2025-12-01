import { useCreateExpensesSchema } from "@/context/CreateExpensesSchemaContext";
import { CreateExpensesStackParamList } from "@/routes/types";
import { Button, Container } from "@/shared/components";
import { DateField, DecimalField, NumberField, TextAreaField, TextField } from "@/shared/components/fields";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Controller } from "react-hook-form";
import { ScrollView, Text } from "react-native";

type ExpenseFormScreenProps = NativeStackScreenProps<
    CreateExpensesStackParamList,
    'ExpenseForm'
>;

export default function ExpenseFormScreen({ navigation }: ExpenseFormScreenProps) {
    const { control, handleSubmit } = useCreateExpensesSchema();

    const onSubmit = () => {
        navigation.navigate('ExpensesPreview')
    }

    return (
        <>
            <Container className="mb-4">
                <Text className="text-3xl mb-1 font-bold text-content-primary">
                    Dados da despesa
                </Text>

                <Text className="text-secondary">
                    Preencha os dados da despesa
                </Text>
            </Container>

            <ScrollView
                contentContainerClassName="gap-3"
                bounces={false}
            >
                <Controller
                    control={control}
                    name="description"
                    render={({ field, fieldState: { error } }) => (
                        <TextField
                            label="Nome"
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            error={error?.message || null}
                            placeholder="Digite o nome da conta"
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="amount"
                    render={({ field, fieldState: { error } }) => (
                        <DecimalField
                            label="Valor"
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            error={error?.message || null}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="installments"
                    render={({ field, fieldState: { error } }) => (
                        <NumberField
                            label="Parcelas"
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            error={error?.message || null}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="startsIn"
                    render={({ field, fieldState: { error } }) => (
                        <DateField
                            label="Começa em"
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            error={error?.message || null}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="notes"
                    render={({ field, fieldState: { error } }) => (
                        <TextAreaField
                            label="Observação (opcional)"
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            error={error?.message || null}
                        />
                    )}
                />

                <Button 
                    onPress={handleSubmit(onSubmit)}
                    text="Próximo"
                />
            </ScrollView>
        </>
    );
}