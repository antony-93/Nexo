import BillsDashboardScreen from '@/screens/dashboard/BillsDashboardScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='BillsDashboardScreen'>
                <Stack.Screen name='BillsDashboardScreen' component={BillsDashboardScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}