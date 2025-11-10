
import { useCreateBillsSchema } from "@/context/CreateBillsSchemaContext";
import { Container } from "@/shared/components";
import { FlatList, ScrollView, Text } from "react-native";
import { BillCard } from "../components/BillCard";

export default function BillsToCreateListScreen() {
    const { bills } = useCreateBillsSchema();

    return (
        <ScrollView bounces={false}>
            <Container className="mb-4">
                <Text className="text-3xl mb-1 font-bold text-content-primary">
                    Contas
                </Text>

                <Text className="text-secondary">
                    Lista de contas a serem geradas
                </Text>
            </Container>

            <FlatList
                data={bills}
                scrollEnabled={false}
                renderItem={({ item }) => <BillCard bill={item} />}
            />
        </ScrollView>
    );
}