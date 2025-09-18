import { DateInput, DecimalInput, InputWrapper, NumberInput, TextInput } from "@/components/inputs";
import { useCreateBillsDto } from "@/context/CreateBillsDtoContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, DollarSign, FileText, Hash } from "lucide-react-native";
import { Controller, useForm } from "react-hook-form";
import { Keyboard, KeyboardAvoidingView, Platform, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { z } from "zod";

const createBillsSchema = z.object({
    name: z.string().min(1, 'Nome é obrigatório').max(100, 'Nome deve ter no máximo 100 caracteres'),
    value: z.number().min(0.01, 'Valor deve ser maior que zero'),
    startsIn: z.date({
        message: 'Data de início é obrigatória',
    }),
    installments: z.number().min(1, 'Deve ter pelo menos 1 parcela')
});

type CreateBillsFormData = z.infer<typeof createBillsSchema>;

export default function BillsFormScreen() {
    const {
        setDetails
    } = useCreateBillsDto();

    const {
        control,
        handleSubmit,
        formState: {
            isValid
        },
        reset
    } = useForm({
        resolver: zodResolver(createBillsSchema),
        defaultValues: {
            name: '',
            value: 0,
            startsIn: new Date(),
            installments: 1
        },
        mode: 'onChange'
    });

    const onSubmit = async (data: CreateBillsFormData) => {
        setDetails({
            name: data.name,
            value: data.value,
            startsIn: data.startsIn,
            installments: data.installments
        });

        reset();
    };

    return (
        <SafeAreaView className="flex-1 bg-background dark:bg-background-dark">
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className="flex-1"
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View className="flex-1 px-6 py-2">
                        <View className="flex flex-col mb-8">
                            <Text className="text-3xl font-semibold ml-2 text-text dark:text-text-dark">
                                Criar Nova Conta
                            </Text>
                        </View>

                        <View className="gap-6 mb-2">
                            <Controller
                                control={control}
                                name="name"
                                render={({ field, fieldState: { error } }) => (
                                    <InputWrapper
                                        label="Nome da conta"
                                        icon={<FileText size={20} color="#6B7280" />}
                                    >
                                        <TextInput
                                            value={field.value}
                                            onChange={field.onChange}
                                            onBlur={field.onBlur}
                                            error={error?.message || null}
                                            placeholder="Digite o nome da conta"
                                        />
                                    </InputWrapper>
                                )}
                            />

                            <Controller
                                control={control}
                                name="value"
                                render={({ field, fieldState: { error } }) => (
                                    <InputWrapper
                                        label="Valor"
                                        icon={<DollarSign size={20} color="#6B7280" />}
                                    >
                                        <DecimalInput
                                            value={field.value}
                                            onChange={field.onChange}
                                            onBlur={field.onBlur}
                                            error={error?.message || null}
                                            placeholder="R$ 0,00"
                                        />
                                    </InputWrapper>
                                )}
                            />

                            <Controller
                                control={control}
                                name="installments"
                                render={({ field, fieldState: { error } }) => (
                                    <InputWrapper
                                        label="Número de parcelas"
                                        icon={<Hash size={20} color="#6B7280" />}
                                    >
                                        <NumberInput
                                            value={field.value}
                                            onChange={field.onChange}
                                            onBlur={field.onBlur}
                                            error={error?.message || null}
                                            placeholder="Ex: 12"
                                        />
                                    </InputWrapper>
                                )}
                            />

                            <Controller
                                control={control}
                                name="startsIn"
                                render={({ field, fieldState: { error } }) => (
                                    <InputWrapper
                                        label="Data de início"
                                        icon={<Calendar size={20} color="#6B7280" />}
                                    >
                                        <DateInput
                                            value={field.value}
                                            onChange={field.onChange}
                                            onBlur={field.onBlur}
                                            error={error?.message || null}
                                            placeholder="mm/yyyy"
                                        />
                                    </InputWrapper>
                                )}
                            />
                        </View>

                        <TouchableOpacity
                            className="py-4 px-8 rounded-xl mt-8 bg-primary dark:bg-primary-dark"
                            onPress={handleSubmit(onSubmit)}
                            disabled={!isValid}
                        >
                            <Text className="text-white text-lg font-semibold text-center">
                                Criar Conta
                            </Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}