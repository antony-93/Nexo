import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, Calendar, Save } from "lucide-react-native";
import { useState } from "react";
import { Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateBillScreen() {
    const navigation = useNavigation();
    const [billName, setBillName] = useState('');
    const [billValue, setBillValue] = useState('');
    const [billRecurrence, setBillRecurrence] = useState('');
    const [billStartDate, setBillStartDate] = useState(new Date());
    const [billCategory, setBillCategory] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleSave = () => {
        // Aqui você pode implementar a lógica para salvar a conta
        console.log('Salvando conta:', { 
            billName, 
            billValue, 
            billRecurrence, 
            billStartDate, 
            billCategory 
        });
        navigation.goBack();
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('pt-BR', {
            month: '2-digit',
            year: 'numeric'
        });
    };

    return (
        <SafeAreaView className="flex-1 bg-background dark:bg-background-dark">
            <View className="px-8 flex-1">
                <View className="flex-row items-center justify-between mb-6">
                    <TouchableOpacity 
                        onPress={() => navigation.goBack()}
                        className="p-2"
                    >
                        <ArrowLeft size={24} />
                    </TouchableOpacity>
                    
                    <Text className="text-2xl font-semibold">
                        Nova Conta
                    </Text>
                    
                    <TouchableOpacity 
                        onPress={handleSave}
                        className="p-2"
                    >
                        <Save size={24} />
                    </TouchableOpacity>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className="gap-6">
                        <View>
                            <Text className="text-lg font-medium text-text dark:text-text-dark mb-2">
                                Nome
                            </Text>

                            <TextInput
                                value={billName}
                                onChangeText={setBillName}
                                placeholder="Conta de Luz"
                                className="bg-surface dark:bg-surface-dark border border-border dark:border-border-dark rounded-xl py-6 px-4"
                                placeholderTextColor="#9CA3AF"
                            />
                        </View>

                        {/* Valor */}
                        <View>
                            <Text className="text-lg font-medium text-text dark:text-text-dark mb-2">
                                Valor
                            </Text>
                            
                            <TextInput
                                value={billValue}
                                onChangeText={setBillValue}
                                placeholder="R$ 150.00"
                                keyboardType="numeric"
                                className="bg-surface dark:bg-surface-dark border border-border dark:border-border-dark rounded-xl py-6 px-4"
                                placeholderTextColor="#9CA3AF"
                            />
                        </View>
                        
                        <View>
                            <Text className="text-lg font-medium text-text dark:text-text-dark mb-2">
                                Recorrência
                            </Text>
                            
                            <TextInput
                                value={billRecurrence}
                                onChangeText={setBillRecurrence}
                                placeholder="1 vez ao mês"
                                className="bg-surface dark:bg-surface-dark border border-border dark:border-border-dark rounded-xl py-6 px-4"
                                placeholderTextColor="#9CA3AF"
                            />
                        </View>
                        
                        <View>
                            <Text className="text-lg font-medium text-text dark:text-text-dark mb-2">
                                Começa em
                            </Text>
                            
                            <TouchableOpacity
                                onPress={() => setShowDatePicker(true)}
                                className="bg-surface dark:bg-surface-dark border border-border dark:border-border-dark rounded-xl py-6 px-4 flex-row items-center justify-between"
                            >
                                <Text className="text-base text-text dark:text-text-dark">
                                    {formatDate(billStartDate)}
                                </Text>
                                <Calendar size={20} color="#9CA3AF" />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text className="text-lg font-medium text-text dark:text-text-dark mb-2">
                                Categoria
                            </Text>
                            
                            <TextInput
                                value={billCategory}
                                onChangeText={setBillCategory}
                                placeholder="Cartão de crédito"
                                className="bg-surface dark:bg-surface-dark border border-border dark:border-border-dark rounded-xl py-6 px-4"
                                placeholderTextColor="#9CA3AF"
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>

            {showDatePicker && (
                <DateTimePicker
                    value={billStartDate}
                    mode="date"
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    onChange={(event, selectedDate) => {
                        setShowDatePicker(false);
                        if (selectedDate) {
                            setBillStartDate(selectedDate);
                        }
                    }}
                />
            )}
        </SafeAreaView>
    );
}