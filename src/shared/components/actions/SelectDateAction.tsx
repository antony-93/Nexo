import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { CalendarIcon } from "lucide-react-native";
import { useCallback, useMemo, useRef, useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MonthCalendar } from "../calendars";
import { Container } from "../Container";
import { Action, ActionProps } from "./Action";

type SelectDateActionProps = Omit<ActionProps, 'description' | 'icon' | 'active'> & {
    onDateChange?: (date: Date) => void;
};

export function SelectDateAction({ onDateChange, ...props }: SelectDateActionProps) {
    const bottomSheetDate = useRef<BottomSheetModal>(null);

    const handleAction = () => {
        bottomSheetDate.current?.present();
    };
    
    const [date, setDate] = useState<Date>(new Date());

    const handleSelectDate = useCallback((newDate: Date) => {
        onDateChange?.(newDate);
        setDate(newDate);
        bottomSheetDate.current?.close();
    }, [onDateChange, bottomSheetDate]);

    const description = useMemo(() => {
        const year = date.getFullYear();

        const month = date.toLocaleString("pt-BR", { month: "long" })
            .replace(/^\w/, (c) => c.toUpperCase());

        return `${year} / ${month}`;
    }, [date]);

    return (
        <>
            <Action
                description={description}
                icon={CalendarIcon}
                active
                onPress={handleAction}
                {...props}
            />

            <BottomSheetModal
                backgroundStyle={{
                    backgroundColor: '#F9FAFB'
                }}
                backdropComponent={(props) => (
                    <BottomSheetBackdrop
                        appearsOnIndex={0}
                        disappearsOnIndex={-1}
                        opacity={0.5}
                        {...props}
                    />
                )}
                ref={bottomSheetDate}
                snapPoints={['50%']}
                index={1}
            >
                <SafeAreaView className='h-full' edges={['bottom', 'left', 'right']}>
                    <BottomSheetView>
                        <Container className="px-4">
                            <Text className="text-center text-xl font-semibold mb-4">Selecionar mês</Text>

                            <MonthCalendar
                                onDateChange={handleSelectDate}
                                date={date}
                            />
                        </Container>
                    </BottomSheetView>
                </SafeAreaView>
            </BottomSheetModal>
        </>
    );
}