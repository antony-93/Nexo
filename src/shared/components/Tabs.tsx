import { Children, useState } from "react";
import { Pressable, Text } from "react-native";
import { cn } from "../utils/Styles";
import { Container } from "./Container";

export function Tabs({ children }: { children: React.ReactNode }) {
    const [index, setIndex] = useState(0);

    const screens = Children.toArray(children) as any[];

    return (
        <>
            <TabBar
                routes={screens.map((s) => s.props.name)}
                index={index}
                setIndex={setIndex}
            />

            <Container>
                {screens[index]}
            </Container>
        </>
    );
}

export function TabScreen({ children }: { children: React.ReactNode, name: string }) {
    return <>{children}</>;
}


function TabBar({ routes, index, setIndex }: {
    routes: string[],
    index: number,
    setIndex: (i: number) => void,
}) {
    return (
        <Container
            direction="horizontal"
            className="border-b border-gray-200 bg-white"
        >
            {routes.map((route, i) => (
                <TabBarItem
                    key={route}
                    label={route}
                    active={i === index}
                    onPress={() => setIndex(i)}
                />
            ))}
        </Container>
    );
}

function TabBarItem({
    label,
    active,
    onPress
}: {
    label: string;
    active: boolean;
    onPress: () => void;
}) {
    const labelCls = cn(
        "text-lg mx-3 font-medium",
        active ? "text-action-primary" : "text-gray-500"
    );

    return (
        <Pressable onPress={onPress} className="items-center">
            <Text className={labelCls}>{label}</Text>

            {active && (
                <Container className="w-full h-0.5 bg-action-primary rounded-full mt-2" />
            )}
        </Pressable>
    );
}
