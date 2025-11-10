import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { format, parseISO } from "date-fns";
import { useRef, useState } from 'react';
import { Keyboard, Text, TouchableOpacity, View, useColorScheme } from "react-native";
import { Calendar } from 'react-native-calendars';
import { MaskInputProps, Masks } from 'react-native-mask-input';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input } from "./Input";

export type TDateInput = Omit<MaskInputProps, 'onChangeText' | 'value' | 'onChange'> & {
    value?: Date
    onChange?: (value: Date) => void
}

export function DateInput({
    onChange,
    value = new Date(),
    ...props
}: TDateInput) {
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const [selectedDate, setSelectedDate] = useState(format(value, 'yyyy-MM-dd'));
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';

    const handleConfirmSelection = () => {
        const date = parseISO(selectedDate).toISOString();

        onChange?.(new Date(date));

        bottomSheetRef.current?.close();
    };

    const openBottomSheet = () => {
        Keyboard.dismiss();
        bottomSheetRef.current?.present();
    };

    return (
        <>
            <TouchableOpacity className='border-primary' onPress={openBottomSheet}>
                <Input
                    editable={false}
                    value={format(value, 'dd-MM-yyyy')}
                    mask={Masks.DATE_DDMMYYYY}
                    pointerEvents="none"
                    {...props}
                />
            </TouchableOpacity>

            <BottomSheetModal
                backgroundStyle={{
                    backgroundColor: isDark ? '#111827' : '#F9FAFB'
                }}
                backdropComponent={(props) => (
                    <BottomSheetBackdrop
                        appearsOnIndex={0}
                        disappearsOnIndex={-1}
                        opacity={0.5}
                        {...props}
                    />
                )}
                ref={bottomSheetRef}
                snapPoints={['70%']}
                index={1}
            >
                <SafeAreaView className='h-full'>
                    <BottomSheetView className="h-full bg-background dark:bg-background-dark px-2">
                        <View className='px-5'>
                            <Text className="text-3xl font-semibold mb-4 text-text dark:text-text-dark">
                                Selecionar data
                            </Text>
                        </View>

                        <View className='flex-1'>
                            <Calendar
                                onDayPress={(date) => setSelectedDate(date.dateString)}
                                markedDates={{
                                    [selectedDate]: {
                                        selected: true,
                                        disableTouchEvent: true,
                                        selectedColor: '#22c55e'
                                    }
                                }}
                                theme={{
                                    todayTextColor: isDark ? '#F9FAFB' : '#111827',
                                    textMonthFontSize: 18,
                                    monthTextColor: isDark ? '#F9FAFB' : '#111827',
                                    textDayHeaderFontSize: 14,
                                    dayTextColor: isDark ? '#F9FAFB' : '#111827',
                                    textDayFontSize: 18,
                                    calendarBackground: isDark ? '#111827' : '#F9FAFB',
                                }}
                            />
                        </View>

                        <View className='px-5'>
                            <TouchableOpacity
                                onPress={handleConfirmSelection}
                                className="py-4 rounded-xl items-center bg-primary dark:bg-primary-dark"
                            >
                                <Text className='text-white text-lg font-semibold'>
                                    Selecionar
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </BottomSheetView>
                </SafeAreaView>
            </BottomSheetModal>
        </>
    );
}