import { useCreateBillsSchema } from "@/context/CreateBillsSchemaContext";
import { CreateBillsStackParamList } from "@/routes/types";
import { Container } from "@/shared/components";
import { DateField, DecimalField, NumberField, TextField } from "@/shared/components/fields";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ChevronRight } from "lucide-react-native";
import { Controller } from "react-hook-form";
import { ScrollView, Text, TouchableOpacity } from "react-native";

type BillsFormScreenProps = NativeStackScreenProps<
    CreateBillsStackParamList,
    'BillsForm'
>;

export default function BillsFormScreen({ navigation }: BillsFormScreenProps) {
    const { control, handleSubmit } = useCreateBillsSchema();

    const onSubmit = () => {
        navigation.navigate('BillsPreview')
    }

    return (
        <>
            <Container className="mb-4">
                <Text className="text-3xl mb-1 font-bold text-content-primary">
                    Dados da conta
                </Text>

                <Text className="text-secondary">
                    Preencha os dados da conta
                </Text>
            </Container>

            <ScrollView 
                contentContainerClassName="gap-3"
                bounces={false}
            >
                <Controller
                    control={control}
                    name="name"
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
                    name="value"
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

                <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                    <Container 
                        direction="horizontal"
                        className="py-5 mt-3 rounded-lg bg-action-primary items-center justify-center"
                    >
                        <Text className="text-white text-base font-semibold">
                            Próximo
                        </Text>

                        <ChevronRight size={20} color="#FFFFFF" />
                    </Container>
                </TouchableOpacity>
            </ScrollView>
        </>
    );
}