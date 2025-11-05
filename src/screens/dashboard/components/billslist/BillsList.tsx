import { useBillsGroupWithBillsQuery } from "@/hooks/useBillsGroupQuery";
import { BillCard } from "@/screens/components/BillCard";
import { Container, Section } from "@/shared/components";
import { BillsGroup } from "@/types/BillsGroup";
import { FlatList } from "react-native";

export default function BillsList() {
    const { data } = useBillsGroupWithBillsQuery();

    const renderItem = (billsGroup: BillsGroup) => (
        <Section
            label={billsGroup.name}
            labelClassName="font-semibold text-primary"
        >
            <Container className="gap-3">
                {billsGroup.bills?.map(bill => <BillCard key={bill.id} bill={bill} />)}
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