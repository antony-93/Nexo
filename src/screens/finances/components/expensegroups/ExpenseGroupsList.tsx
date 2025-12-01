import { useExpenseGroupsQuery } from "@/context/LoadExpenseGroupsQueryContext";
import { RootStackParamList } from "@/routes/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlatList } from "react-native";
import { ExpenseGroupCard } from "./ExpenseGroupCard";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function ExpenseGroupsList() {
    const { data } = useExpenseGroupsQuery();

    const navigation = useNavigation<NavigationProp>();

    return (
        <FlatList
            scrollEnabled={false}
            contentContainerClassName="gap-5 mb-2"
            data={data?.content}
            renderItem={({ item }) => (
                <ExpenseGroupCard
                    expenseGroup={item}
                    onPress={() => navigation.navigate('ExpenseByGroupList', { groupId: item.id })}
                />
            )}
        />
    );
}