import { useCreateBillsDto } from "@/context/CreateBillsDtoContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, DollarSign, FileText, Hash } from "lucide-react-native";
import { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
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

    const [showDatePicker, setShowDatePicker] = useState(false);

    const {
        control,
        handleSubmit,
        formState: {
            errors,
            isValid
        },
        reset,
        setValue
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

    const onDateChange = (event: any, selectedDate?: Date) => {
        setShowDatePicker(false);
        if (selectedDate) {
            setValue('startsIn', selectedDate);
        }
    };

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
                            <View>
                                <View className="flex-row items-center mb-3">
                                    <FileText size={20} color="#6B7280" />
                                    <Text className="text-base font-semibold text-gray-800 dark:text-gray-200 ml-2">
                                        Nome da conta
                                    </Text>
                                </View>
                                <Controller
                                    control={control}
                                    name="name"
                                    render={({ field }) => (
                                        <TextInput
                                            className="leading-6 rounded-xl px-5 py-4 text-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                                            value={field.value}
                                            onChangeText={field.onChange}
                                            onBlur={field.onBlur}
                                            placeholder="Digite o nome da conta"
                                            placeholderTextColor="#9CA3AF"
                                        />
                                    )}
                                />
                                {errors.name && (
                                    <Text className="text-red-500 dark:text-red-400 text-sm mt-2">
                                        {errors.name.message}
                                    </Text>
                                )}
                            </View>

                            <View>
                                <View className="flex-row items-center mb-3">
                                    <DollarSign size={20} color="#6B7280" />
                                    <Text className="text-base font-semibold text-gray-800 dark:text-gray-200 ml-2">
                                        Valor
                                    </Text>
                                </View>
                                <Controller
                                    control={control}
                                    name="value"
                                    render={({ field }) => (
                                        <TextInput
                                            className={`border leading-6 border-gray-300 dark:border-gray-600 rounded-xl px-5 py-4 text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 ${errors.value ? 'border-red-500 dark:border-red-400' : ''
                                            }`}
                                            {...field}
                                            keyboardType="numeric"
                                            placeholder="150.00"
                                            placeholderTextColor="#9CA3AF"
                                        />
                                    )}
                                />
                                {errors.value && (
                                    <Text className="text-red-500 dark:text-red-400 text-sm mt-2">
                                        {errors.value.message}
                                    </Text>
                                )}
                            </View>

                            <View>
                                <View className="flex-row items-center mb-3">
                                    <Hash size={20} color="#6B7280" />
                                    <Text className="text-base font-semibold text-gray-800 dark:text-gray-200 ml-2">
                                        Número de parcelas
                                    </Text>
                                </View>
                                <Controller
                                    control={control}
                                    name="installments"
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                            className={`border border-gray-300 dark:border-gray-600 rounded-xl px-5 py-4 text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 ${errors.installments ? 'border-red-500 dark:border-red-400' : ''
                                                }`}
                                            style={{
                                                textAlignVertical: 'center',
                                                includeFontPadding: false,
                                                lineHeight: 20
                                            }}
                                            value={(value as number).toString()}
                                            onChangeText={(text) => onChange(parseInt(text) || 1)}
                                            onBlur={onBlur}
                                            keyboardType="numeric"
                                            placeholder="Ex: 12"
                                            placeholderTextColor="#9CA3AF"
                                        />
                                    )}
                                />
                                {errors.installments && (
                                    <Text className="text-red-500 dark:text-red-400 text-sm mt-2">
                                        {errors.installments.message}
                                    </Text>
                                )}
                            </View>

                            <View>
                                <View className="flex-row items-center mb-3">
                                    <Calendar size={20} color="#6B7280" />
                                    <Text className="text-base font-semibold text-gray-800 dark:text-gray-200 ml-2">
                                        Data de início
                                    </Text>
                                </View>
                                <Controller
                                    control={control}
                                    name="startsIn"
                                    render={({ field: { value } }) => (
                                        <TouchableOpacity
                                            className={`border border-gray-300 dark:border-gray-600 rounded-xl px-5 py-4 bg-white dark:bg-gray-800 flex-row justify-between items-center ${errors.startsIn ? 'border-red-500 dark:border-red-400' : ''
                                                }`}
                                            onPress={() => setShowDatePicker(true)}
                                        >
                                            <Text className="text-lg text-gray-900 dark:text-gray-100 flex-1">
                                                {value.toLocaleDateString('pt-BR', {
                                                    year: 'numeric',
                                                    month: 'long'
                                                })}
                                            </Text>
                                            <Calendar size={20} color="#6B7280" />
                                        </TouchableOpacity>
                                    )}
                                />
                                {errors.startsIn && (
                                    <Text className="text-red-500 dark:text-red-400 text-sm mt-2">
                                        {errors.startsIn.message}
                                    </Text>
                                )}
                            </View>
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