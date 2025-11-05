import { useNavigation } from "@react-navigation/native";
import { ChevronLeft } from "lucide-react-native";
import { Text, TouchableOpacity } from "react-native";
import { Container } from "./Container";

type GoBackBarProps = {
    title: string
    className: string
}

export function GoBackBar({ title, className }: GoBackBarProps) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity className={className} onPress={() => navigation.goBack()}>
            <Container direction="horizontal" className="items-center">
                <ChevronLeft size={30} color="#6B4EFF" />

                <Text className="text-content-primary">
                    {title}
                </Text>
            </Container>
        </TouchableOpacity>
    )
}