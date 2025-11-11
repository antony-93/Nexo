import { useCreateBillsSchema } from "@/context/CreateBillsSchemaContext";
import { useBillsGroupQuery } from "@/hooks/useBillsGroupQuery";
import { CreateBillsStackParamList } from "@/routes/types";
import { Card, Container } from "@/shared/components";
import { BillsGroup } from "@/types/BillsGroup";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Wallet } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

type SelectBillsGroupScreenProps = NativeStackScreenProps<
    CreateBillsStackParamList,
    'SelectBillsGroup'
>;

export default function SelectBillsGroupScreen({ navigation }: SelectBillsGroupScreenProps) {
    const { data } = useBillsGroupQuery();

    const { setBillsGroup } = useCreateBillsSchema();

    const handleBillsGroup = (billsGroup: BillsGroup) => {
        setBillsGroup(billsGroup);
        navigation.navigate('BillsForm');
    }

    const renderBillsGroupCard = (billsGroup: BillsGroup) => (
        <TouchableOpacity onPress={() => handleBillsGroup(billsGroup)}>
            <Card direction="horizontal" className="items-center gap-4">
                <View
                    className="bg-action-secondary p-1.5 rounded-md border-action-primary border-[1px]"
                >
                    <Wallet size={24} color="#6B4EFF" />
                </View>

                <Text className="flex-1 font-medium">
                    {billsGroup.name}
                </Text>
            </Card>
        </TouchableOpacity>
    );

    return (
        <>
            <Container className="mb-4">
                <Text className="text-3xl mb-1 font-bold text-content-primary">
                    Grupo de contas
                </Text>

                <Text className="text-secondary">
                    Selecione um grupo de contas para sua nova conta
                </Text>
            </Container>

            <FlatList
                bounces={false}
                contentContainerClassName="gap-4 mb-2"
                renderItem={({ item }) => renderBillsGroupCard(item)}
                data={data?.content}
                keyExtractor={bg => bg.id}
            />
        </>
    );
}