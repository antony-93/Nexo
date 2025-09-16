import { useBillsGroupQuery } from "@/hooks/UseBillsGroup";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SelectBillsScreen() {
    const {
        data = []
    } = useBillsGroupQuery();
    
    return (
        <SafeAreaView>
            <View className="flex flex-col">
                <Text className="text-2xl font-semibold">
                    Selecione o grupo de contas
                </Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    data.map(bg => (
                        <View className="mb-2 border-b-[1px] border-gray-100">
                            <Text className="text-xl font-medium">
                                {bg.name}
                            </Text>
                        </View>
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    );
}