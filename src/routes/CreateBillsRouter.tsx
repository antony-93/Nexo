import { CreateBillsDtoProvider } from '@/context/CreateBillsDtoContext';
import BillsFormScreen from '@/screens/create/BillsFormScreen';
import SelectBillsGroupScreen from '@/screens/create/SelectBillsGroupScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function CreateBillsRouter() {

    return (
        <CreateBillsDtoProvider>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SelectBillsGroupScreen'>
                <Stack.Screen name='SelectBillsGroupScreen' component={SelectBillsGroupScreen} />
                <Stack.Screen name='BillsFormScreen' component={BillsFormScreen} />
            </Stack.Navigator>
        </CreateBillsDtoProvider>
    )
}