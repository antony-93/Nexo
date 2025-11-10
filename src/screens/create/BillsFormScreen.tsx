import { useCreateBillsSchema } from "@/context/CreateBillsSchemaContext";
import { CreateBillsStackParamList } from "@/routes/types";
import { CreateBillsSchema } from "@/schemas/CreateBillsSchema";
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
    const { control, handleSubmit, generateBillsFromForm } = useCreateBillsSchema();

    const onSubmit = (data: CreateBillsSchema) => {
        generateBillsFromForm(data);
        navigation.navigate('BillsToCreateList');
    }

    return (
        <ScrollView bounces={false}>
            <Container className="mb-4">
                <Text className="text-3xl mb-1 font-bold text-content-primary">
                    Dados da conta
                </Text>

                <Text className="text-secondary">
                    Preencha os dados da conta
                </Text>
            </Container>

            <Container className="gap-3">
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
                        className="py-5 px-8 mt-3 rounded-lg bg-action-primary items-center justify-center"
                    >
                        <Text className="text-white text-base font-semibold">
                            Próximo
                        </Text>

                        <ChevronRight size={20} color="#FFFFFF" />
                    </Container>
                </TouchableOpacity>
            </Container>
        </ScrollView>
    );
}

// import { useCreateBillsSchema } from "@/context/CreateBillsSchemaContext";
// import { CreateBillsSchema, createBillsSchema } from "@/schemas/CreateBillsSchema";
// import DateField from "@/shared/components/fields/DateField";
// import DecimalField from "@/shared/components/fields/DecimalField";
// import NumberField from "@/shared/components/fields/NumberField";
// import TextField from "@/shared/components/fields/TextField";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useNavigation } from "@react-navigation/native";
// import { Controller, useForm } from "react-hook-form";
// import { Keyboard, KeyboardAvoidingView, Platform, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function BillsFormScreen() {
//     const {
//         createBillsSchema: createBillsSchemaObject,
//         setDetails
//     } = useCreateBillsSchema();

//     const {
//         control,
//         handleSubmit,
//         reset
//     } = useForm({
//         resolver: zodResolver(createBillsSchema),
//         defaultValues: createBillsSchemaObject,
//         mode: 'onSubmit'
//     });

//     const navigation = useNavigation<any>();

//     const onSubmit = async (data: CreateBillsSchema) => {
//         setDetails({
//             name: data.name,
//             value: data.value,
//             startsIn: data.startsIn,
//             installments: data.installments
//         });

//         navigation.navigate('BillsToCreateListScreen')
//     };

//     return (
//         <SafeAreaView className="flex-1 bg-primary">
//             <KeyboardAvoidingView
//                 behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//                 className="flex-1"
//             >
//                 <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//                     <View className="flex-1 px-6">
//                         <View className="mb-4">
//                             <Text className="text-3xl mb-1 font-bold text-primary">
//                                 Preencher dados da conta
//                             </Text>

//                             <Text className="text-secondary">
//                                 Preencha os dados da sua nova conta
//                             </Text>
//                         </View>

//                         <View className="gap-6 mb-2">
//                             <Controller
//                                 control={control}
//                                 name="installments"
//                                 render={({ field, fieldState: { error } }) => (
//                                     <NumberField
//                                         label="Parcelas"
//                                         value={field.value}
//                                         onChange={field.onChange}
//                                         onBlur={field.onBlur}
//                                         error={error?.message || null}
//                                     />
//                                 )}
//                             />

//                             <Controller
//                                 control={control}
//                                 name="startsIn"
//                                 render={({ field, fieldState: { error } }) => (
//                                     <DateField
//                                         label="Começa em"
//                                         value={field.value}
//                                         onChange={field.onChange}
//                                         onBlur={field.onBlur}
//                                         error={error?.message || null}
//                                     />
//                                 )}
//                             />
//                         </View>

//                         <TouchableOpacity
//                             className="py-4 px-8 rounded-xl mt-8 bg-primary dark:bg-primary-dark"
//                             onPress={handleSubmit(onSubmit)}
//                         >
//                             <Text className="text-white text-lg font-semibold text-center">
//                                 Próximo
//                             </Text>
//                         </TouchableOpacity>
//                     </View>
//                 </TouchableWithoutFeedback>
//             </KeyboardAvoidingView>
//         </SafeAreaView>
//     );
// }