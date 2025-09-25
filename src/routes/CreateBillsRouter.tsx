import { CreateBillsSchemaProvider } from '@/context/CreateBillsSchemaContext';
import BillsFormScreen from '@/screens/create/BillsFormScreen';
import BillsToCreateListScreen from '@/screens/create/BillsToCreateListScreen';
import SelectBillsGroupScreen from '@/screens/create/SelectBillsGroupScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function CreateBillsRouter() {

    return (
        <CreateBillsSchemaProvider>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SelectBillsGroupScreen'>
                <Stack.Screen name='SelectBillsGroupScreen' component={SelectBillsGroupScreen} />
                <Stack.Screen name='BillsFormScreen' component={BillsFormScreen} />
                <Stack.Screen name='BillsToCreateListScreen' component={BillsToCreateListScreen} />
            </Stack.Navigator>
        </CreateBillsSchemaProvider>
    )
}