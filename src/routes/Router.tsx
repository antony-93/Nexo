import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BillsScreen from '~/screens/BillsScreen';
import CreateBillScreen from '~/screens/CreateBillScreen';

const Stack = createNativeStackNavigator();

export default function Router() {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Bills'>
                <Stack.Screen name='Bills' component={BillsScreen} />
                <Stack.Screen name='CreateBill' component={CreateBillScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}