
import { useCreateBillsSchema } from "@/context/CreateBillsSchemaContext";
import { useGenerateBills } from "@/hooks/useGenerateBills";
import { CreateBillsStackParamList } from "@/routes/types";
import { CreateBillsSchema } from "@/schemas/CreateBillsSchema";
import { Container, Section } from "@/shared/components";
import { CommonActions } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Receipt } from "lucide-react-native";
import { useWatch } from "react-hook-form";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { BillCard } from "../components/BillCard";

type BillsPreviewProps = NativeStackScreenProps<
    CreateBillsStackParamList,
    'BillsPreview'
>

export default function BillsPreview({ navigation }: BillsPreviewProps) {
    const { control } = useCreateBillsSchema();

    const data = useWatch({ control }) as CreateBillsSchema,
        bills = useGenerateBills(data);

    return (
        <>
            <Container className="mb-4">
                <Text className="text-3xl mb-1 font-bold text-content-primary">
                    Contas
                </Text>

                <Text className="text-secondary">
                    Lista de contas a serem geradas
                </Text>
            </Container>

            <Section label={data.billsGroup.name} className="flex-1" labelClassName="font-semibold text-content-primary">
                <FlatList
                    bounces={false}
                    data={bills}
                    contentContainerClassName="gap-3"
                    renderItem={({ item }) => <BillCard bill={item} hiddenPaymentDate={false} />}
                />
            </Section>

            <TouchableOpacity onPress={() => navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'BillsDashboard' }],
                })
            )}>
                <Container
                    direction="horizontal"
                    className="py-5 rounded-lg bg-action-primary items-center justify-center"
                >
                    <Receipt size={20} color="#FFFFFF" />

                    <Text className="text-white text-base font-semibold ml-1">
                        Gerar contas
                    </Text>
                </Container>
            </TouchableOpacity>
        </>
    );
}