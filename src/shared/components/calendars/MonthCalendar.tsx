import { cn } from "@/shared/utils/Styles";
import { ChevronLeft, ChevronRight } from "lucide-react-native";
import { useMemo, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming
} from "react-native-reanimated";
import { Card } from "../Card";
import { Container, ContainerProps } from "../Container";

export type MonthCalendarProps = ContainerProps & {
    onDateChange?: (date: Date) => void;
    date?: Date;
};

const MONTHS = [
    "Jan", "Fev", "Mar",
    "Abr", "Mai", "Jun",
    "Jul", "Ago", "Set",
    "Out", "Nov", "Dez",
];

export function MonthCalendar({ onDateChange, date = new Date(), ...props }: MonthCalendarProps) {
    const [year, setYear] = useState<number>(date.getFullYear());
    const [displayedYear, setDisplayedYear] = useState(year);

    const translateX = useSharedValue(0);

    const selectedMonth = date.getMonth();

    const animateYearChange = (direction: "next" | "prev") => {
        const offset = direction === "next" ? -300 : 300;
    
        setDisplayedYear(y => y + (direction === "next" ? 1 : -1));
    
        translateX.value = withTiming(offset, { duration: 250 }, () => {
            translateX.value = offset * -1;
            translateX.value = withTiming(0, { duration: 250 });
        });
    };    

    const handleNext = () => {
        setYear(year + 1);
        animateYearChange("next");
    };

    const handlePrev = () => {
        setYear(year - 1);
        animateYearChange("prev");
    };

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    const handleSelect = (monthIndex: number) => {
        const newDate = new Date(displayedYear, monthIndex, 1);
        onDateChange?.(newDate);
    };

    return (
        <Container {...props}>
            <Container direction="horizontal" className="justify-between items-center mb-6 px-2">
                <TouchableOpacity onPress={handlePrev}>
                    <ChevronLeft size={24} color="#6B7280" />
                </TouchableOpacity>

                <Text className="font-medium text-2xl">
                    {displayedYear}
                </Text>

                <TouchableOpacity onPress={handleNext}>
                    <ChevronRight size={24} color="#6B7280" />
                </TouchableOpacity>
            </Container>

            <Animated.View style={[animatedStyle]}>
                <Container className="flex-row flex-wrap justify-between">
                    {MONTHS.map((label, index) => {
                        const isSelected =
                            displayedYear === date.getFullYear() &&
                            index === selectedMonth;

                        return (
                            <MonthCard
                                key={label}
                                label={label}
                                selected={isSelected}
                                onPress={() => handleSelect(index)}
                            />
                        );
                    })}
                </Container>
            </Animated.View>
        </Container>
    );
}

type MonthCardProps = {
    label: string;
    selected?: boolean;
    onPress?: () => void;
};

function MonthCard({ label, selected, onPress }: MonthCardProps) {
    const textCls = useMemo(() => {
        const selectedCls = selected ? "text-white" : "text-content-primary";
        return cn("font-medium text-lg text-center", selectedCls);
    }, [selected]);

    const cardCls = useMemo(() => {
        const selectedCls = selected ? "bg-action-primary" : "";
        return cn("shadow-none", selectedCls);
    }, [selected]);

    return (
        <TouchableOpacity
            onPress={onPress}
            className="w-[30%] h-16 mb-1"
        >
            <Card className={cardCls}>
                <Text className={textCls}>{label}</Text>
            </Card>
        </TouchableOpacity>
    );
}
