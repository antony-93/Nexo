import { HomeStackParamList, RootStackParamList } from "@/routes/types";
import { Container } from "@/shared/components";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, Text } from "react-native";

type SettingsScreenProps = CompositeScreenProps<
    BottomTabScreenProps<HomeStackParamList, 'Settings'>,
    NativeStackScreenProps<RootStackParamList>
>;

export default function SettingsScreen({ navigation }: SettingsScreenProps) {
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const y = e.nativeEvent.contentOffset.y;
        setIsSticky(y > 63);
    };
    
    return (
        <ScrollView
            stickyHeaderIndices={[1]}
            bounces={false}
            showsVerticalScrollIndicator={false}
            contentContainerClassName="pb-2"
            onScroll={handleScroll}
        >
            <Container direction="horizontal" className="justify-between items-center mb-3 px-6">
                <Container>
                    <Text className="text-3xl mb-1 font-bold text-content-primary">Configurações</Text>
                    <Text className="text-content-secondary">Configure o aplicativo a sua maneira</Text>
                </Container>
            </Container>
        </ScrollView>
    );
}