import { useCategoryMutation } from "@/hooks/useCategoryMutations";
import { CreateCategoryStackParamList, HomeStackParamList } from "@/routes/types";
import { AddButton, Container } from "@/shared/components";
import { TextField } from "@/shared/components/fields";
import { zodResolver } from "@hookform/resolvers/zod";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CommonActions, CompositeScreenProps } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Controller, useForm } from "react-hook-form";
import { ScrollView, Text } from "react-native";
import z from "zod";

const CreateCategorySchema = z.object({
    description: z.string()
        .min(1, "O nome da conta é obrigatório")
        .max(100, "O nome da conta deve ter no máximo 100 caracteres")
});

type CreateCategorySchemaType = z.infer<typeof CreateCategorySchema>;

type CategoryFormScreenProps = CompositeScreenProps<
    NativeStackScreenProps<CreateCategoryStackParamList, 'CategoryForm'>,
    BottomTabScreenProps<HomeStackParamList>
>;

export default function CategoryFormScreen({ navigation }: CategoryFormScreenProps) {
    const {
        control,
        handleSubmit
    } = useForm<CreateCategorySchemaType>({
        resolver: zodResolver(CreateCategorySchema),
        mode: 'onBlur',
        defaultValues: {
            description: ''
        }
    });

    const { mutateAsync, isPending } = useCategoryMutation();

    const onSubmit = async (data: CreateCategorySchemaType) => {
        const result = await mutateAsync(data);
    
        if (!result.success) return;

        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'Home' }],
            })
        )
    }
    
    return (
        <>
            <Container className="mb-4">
                <Text className="text-3xl mb-1 font-bold text-content-primary">
                    Dados da categoria
                </Text>

                <Text className="text-secondary">
                    Preencha os dados da categoria
                </Text>
            </Container>

            <ScrollView
                contentContainerClassName="gap-4"
                bounces={false}
            >
                <Controller
                    control={control}
                    name="description"
                    render={({ field, fieldState: { error } }) => (
                        <TextField
                            label="Nome"
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            error={error?.message || null}
                            placeholder="Digite o nome da categoria"
                        />
                    )}
                />

                <AddButton 
                    text="Criar categoria"
                    onPress={handleSubmit(onSubmit)}
                />
            </ScrollView>
        </>
    );
}