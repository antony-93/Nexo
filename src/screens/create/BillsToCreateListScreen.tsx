import { useCreateBillsSchema } from "@/context/CreateBillsSchemaContext";
import useCreateBillDto from "@/hooks/UseCreateBillDto";
import useCreateBillsMutation from "@/hooks/useCreateBills";
import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";
import { Calendar } from "lucide-react-native";
import { useCallback } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BillsToCreateListScreen() {
    const { createBillsSchema } = useCreateBillsSchema(),
        billsDto = useCreateBillDto(createBillsSchema),
        billsMutation = useCreateBillsMutation(),
        navigation = useNavigation<any>();

    const handleCreate = useCallback(async () => {
        console.log('aqui')
        await billsMutation.mutateAsync(billsDto);
        console.log('aqui2')
        
        // navigation.reset({
        //     index: 0,
        //     routes: [{ name: 'Tabs' }],
        // });
    }, [billsDto])

    return (
        <SafeAreaView className="flex-1 bg-background dark:bg-background-dark px-6 py-2">
            <View className="flex flex-col mb-4">
                <Text className="text-3xl font-semibold text-text dark:text-text-dark">
                    Contas geradas
                </Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="gap-4">
                    {billsDto.map((b, i) => (
                        <TouchableOpacity
                            key={i}
                            className="bg-surface dark:bg-surface-dark border rounded-xl p-4 border-border dark:border-border-dark"
                        >
                            <View className="flex-col">
                                <Text className="text-base font-medium text-text dark:text-text-dark">
                                    {b.name}
                                </Text>

                                <View className="flex-row items-end justify-between">
                                    <View className="flex-row items-center flex-1">
                                        <Calendar
                                            size={20}
                                            color={'#f9fafb'}
                                        />

                                        <Text className='text-base ml-2 font-medium text-text dark:text-text-dark'>
                                            {format(b.paymentDate, 'dd/MM/yyyy')}
                                        </Text>
                                    </View>

                                    <Text className='text-lg font-bold text-text dark:text-text-dark'>
                                        R$ {b.value.toFixed(2).replace('.', ',')}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            <TouchableOpacity
                className="py-4 px-8 rounded-xl mt-8 bg-primary dark:bg-primary-dark"
                onPress={handleCreate}
            >
                <Text className="text-white text-lg font-semibold text-center">
                    Criar
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}