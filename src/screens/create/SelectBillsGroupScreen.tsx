import { useCreateBillsDto } from "@/context/CreateBillsDtoContext";
import { useBillsGroupQuery } from "@/hooks/UseBillsGroup";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SelectBillsGroupScreen() {
    const { data = [] } = useBillsGroupQuery();

    const { setBillsGroupId } = useCreateBillsDto();
    
    const navigation = useNavigation<any>();

    const handleSelectBillsGroupId = (billsGroupId: string) => {
        setBillsGroupId(billsGroupId);
        navigation.navigate('BillsFormScreen')
    }

    return (
        <SafeAreaView className="flex-1 bg-background dark:bg-background-dark px-6 py-2">
            <View className="flex flex-col mb-2">
                <Text className="text-3xl font-semibold ml-2 text-text dark:text-text-dark">
                    Selecione o grupo de contas
                </Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    data.map(bg => (
                        <TouchableOpacity 
                            onPress={() => handleSelectBillsGroupId(bg.id)}
                            className="border-b-[1px] border-gray-100 px-2 py-5" 
                            key={bg.id}
                        >
                            <Text className="text-xl ml-2 text-text dark:text-text-dark">
                                {bg.name}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    );
}