import ExpensesByGroupListScreen from '@/screens/finances/expenses/list/ExpensesByGroupListScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateCategoryStack from './CreateCategoryStack';
import CreateExpensesStack from './CreateExpensesStack';
import HomeStack from './HomeStack';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='Home'
        >
            <Stack.Screen
                name='Home'
                component={HomeStack}
            />

            <Stack.Screen
                name='CreateExpenses'
                component={CreateExpensesStack}
            />

            <Stack.Screen
                name='CreateCategory'
                component={CreateCategoryStack}
            />

            <Stack.Screen
                name='ExpenseByGroupList'
                component={ExpensesByGroupListScreen}
            />
        </Stack.Navigator>
    );
}