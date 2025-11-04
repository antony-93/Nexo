import { useBillsGroupWithBillsQuery } from "@/hooks/useBillsGroupQuery";
import { Card } from "@/shared/components/Card";
import { Container } from "@/shared/components/Container";
import { Section } from "@/shared/components/Section";
import { BillsGroup } from "@/types/BillsGroup";
import { Receipt } from "lucide-react-native";
import { FlatList, Text } from "react-native";

export default function BillsList() {
    const { data } = useBillsGroupWithBillsQuery();

    const renderItem = (billsGroup: BillsGroup) => (
        <Section
            label={billsGroup.name}
            labelClassName="font-semibold text-primary"
        >
            <Container className="gap-3">
                {billsGroup.bills?.map(bill => (
                    <Card direction="horizontal" key={bill.id} className="items-center gap-3">
                        <Container
                            className="bg-action-secondary p-1.5 rounded-md border-action-primary border-[1px]"
                        >
                            <Receipt size={20} color="#6B4EFF" />
                        </Container>

                        <Text className="flex-1 font-medium">
                            {bill.name}
                        </Text>

                        <Text className="font-semibold text-xl">
                            R$ {bill.value},00
                        </Text>
                    </Card>
                ))}
            </Container>
        </Section>
    );

    return (
        <FlatList
            scrollEnabled={false}
            contentContainerClassName="gap-5 mb-2"
            data={data?.content}
            keyExtractor={gp => gp.id}
            renderItem={({ item }) => renderItem(item)}
        />
    );
}