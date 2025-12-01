import { useCreateExpensesSchema } from "@/context/CreateExpensesSchemaContext";
import { useCategoryQuery } from "@/hooks/useCategoryQuery";
import { CreateExpensesStackParamList } from "@/routes/types";
import { Card, Container } from "@/shared/components";
import { Category } from "@/types/Category";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ChevronRight, Wallet } from "lucide-react-native";
import { Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";

type SelectCategoryScreenProps = NativeStackScreenProps<
    CreateExpensesStackParamList,
    'SelectCategory'
>;

export default function SelectCategoryScreen({ navigation }: SelectCategoryScreenProps) {
    const { data } = useCategoryQuery();

    const { setCategory } = useCreateExpensesSchema();

    const handleCategory = (category: Category) => {
        setCategory(category);
        navigation.navigate('ExpenseForm');
    }

    const renderCategoryCard = (category: Category) => (
        <TouchableOpacity onPress={() => handleCategory(category)}>
            <Card direction="horizontal" className="items-center gap-4">
                <Container
                    className="bg-action-secondary p-1.5 rounded-md border-action-primary border-[1px]"
                >
                    <Wallet size={24} color="#6B4EFF" />
                </Container>

                <Text className="flex-1 font-medium">
                    {category.description}
                </Text>

                <ChevronRight size={20} color={'#6B7280'}/>
            </Card>
        </TouchableOpacity>
    );

    return (
        <>
            <Container className="mb-4">
                <Text className="text-3xl mb-1 font-bold text-content-primary">
                    Categorias
                </Text>

                <Text className="text-secondary">
                    Selecione uma categoria para sua nova conta
                </Text>
            </Container>

            <FlatList
                bounces={false}
                contentContainerClassName="gap-4 mb-2"
                renderItem={({ item }) => renderCategoryCard(item)}
                data={data?.content}
                keyExtractor={bg => bg.id}
            />
        </>
    );
}