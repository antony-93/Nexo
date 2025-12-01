import { CreateExpensesSchemaProvider } from '@/context/CreateExpensesSchemaContext';
import ExpenseFormScreen from '@/screens/finances/expenses/create/ExpenseFormScreen';
import ExpensesPreviewScreen from '@/screens/finances/expenses/create/ExpensesPreviewScreen';
import SelectCategoryScreen from '@/screens/finances/expenses/create/SelectCategoryScreen';
import { Container, GoBackBar } from '@/shared/components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CreateExpensesStackParamList } from './types';

const Stack = createNativeStackNavigator<CreateExpensesStackParamList>();

export default function CreateExpensesStack() {
    return (
        <CreateExpensesSchemaProvider>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName='SelectCategory'
                screenLayout={({ children }) => (
                    <SafeAreaView className='flex-1 bg-surface-primary'>
                        <GoBackBar title='Voltar' className='mb-1 px-2' />

                        <Container className='px-6 flex-1'>
                            {children}
                        </Container>
                    </SafeAreaView>
                )}
            >
                <Stack.Screen
                    name='SelectCategory'
                    component={SelectCategoryScreen}
                />

                <Stack.Screen
                    name='ExpenseForm'
                    component={ExpenseFormScreen}
                />

                <Stack.Screen
                    name='ExpensesPreview'
                    component={ExpensesPreviewScreen}
                />
            </Stack.Navigator>
        </CreateExpensesSchemaProvider>
    )
}