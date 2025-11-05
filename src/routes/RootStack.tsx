import BillsDashboardScreen from '@/screens/dashboard/BillsDashboardScreen';
import { Container } from '@/shared/components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateBillsStack from './CreateBillsStack';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='BillsDashboard'
            screenLayout={({ children }) => (
                <Container className='flex-1 bg-surface-primary'>
                    {children}
                </Container>
            )}
        >
            <Stack.Screen
                name='BillsDashboard'
                component={BillsDashboardScreen}
            />

            <Stack.Screen
                name='CreateBills'
                component={CreateBillsStack}
            />
        </Stack.Navigator>
    );
}