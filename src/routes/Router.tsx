import BillsScreen from '@/screens/BillsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateBillsRouter from './CreateBillsRouter';

const Stack = createNativeStackNavigator();

export default function Router() {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Bills'>
                <Stack.Screen name='Bills' component={BillsScreen} />
                <Stack.Screen name='CreateBillsRouter' component={CreateBillsRouter} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}