import BillsFormScreen from '@/screens/create/BillsFormScreen';
import SelectBillsGroupScreen from '@/screens/create/SelectBillsGroupScreen';
import { Container, GoBackBar } from '@/shared/components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CreateBillsStackParamList } from './types';

const Stack = createNativeStackNavigator<CreateBillsStackParamList>();

export default function CreateBillsStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='SelectBillsGroup'
            screenLayout={({ children }) => (
                <SafeAreaView className='flex-1 bg-surface-primary'>
                    <GoBackBar title='Dashboard' className='mb-2 px-2' />

                    <Container className='px-6'>
                        {children}
                    </Container>
                </SafeAreaView>
            )}
        >
            <Stack.Screen
                name='SelectBillsGroup'
                component={SelectBillsGroupScreen}
            />

            <Stack.Screen
                name='BillsForm'
                component={BillsFormScreen}
            />
            {/* <Stack.Screen name='BillsToCreateListScreen' component={BillsToCreateListScreen} /> */}
        </Stack.Navigator>
    )
}