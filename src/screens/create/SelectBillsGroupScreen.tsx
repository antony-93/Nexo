import { Card } from "@/components/ui/Card";
import { useCreateBillsSchema } from "@/context/CreateBillsSchemaContext";
import { useBillsGroupQuery } from "@/hooks/UseBillsGroup";
import { useNavigation } from "@react-navigation/native";
import { Wallet } from "lucide-react-native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SelectBillsGroupScreen() {
    const { data = [] } = useBillsGroupQuery();

    const { setBillsGroupId } = useCreateBillsSchema();

    const navigation = useNavigation<any>();

    const handleSelectBillsGroupId = (billsGroupId: string) => {
        setBillsGroupId(billsGroupId);
        navigation.navigate('BillsFormScreen')
    }

    return (
        <SafeAreaView className="flex-1 px-6 bg-primary">
            <View className="mb-4">
                <Text className="text-3xl mb-1 font-bold text-primary">
                    Selecionar grupo de contas
                </Text>

                <Text className="text-secondary">
                    Selecione um grupo de contas para sua nova conta
                </Text>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                bounces={false}
                contentContainerClassName="gap-4"
            >
                {data.map(bg => (
                    <TouchableOpacity
                        onPress={() => handleSelectBillsGroupId(bg.id)}
                        key={bg.id}
                    >
                        <Card key={bg.id} className="flex-row items-center gap-4">
                            <View
                                className="bg-action-secondary p-1.5 rounded-md border-action-primary border-[1px]"
                            >
                                <Wallet size={20} color="#6B4EFF" />
                            </View>

                            <Text className="flex-1 font-medium">
                                {bg.name}
                            </Text>
                        </Card>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}