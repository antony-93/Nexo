import { useExpensesByGroupQuery } from "@/hooks/useExpensesByGroupQuery";
import { RootStackParamList } from "@/routes/types";
import { ExpenseCard } from "@/screens/components/ExpenseCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList } from "react-native";

type ExpensesByGroupListScreenProps = NativeStackScreenProps<RootStackParamList, 'ExpenseByGroupList'>;

export default function ExpensesByGroupListScreen({ route }: ExpensesByGroupListScreenProps) {
    const { groupId } = route.params;

    const { data } = useExpensesByGroupQuery(groupId);

    return (
        <FlatList
            scrollEnabled={false}
            contentContainerClassName="gap-5 mb-2"
            data={data?.content}
            renderItem={({ item }) => <ExpenseCard expense={item} />}
        />
    );
}