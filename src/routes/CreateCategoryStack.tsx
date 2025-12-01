import CategoryFormScreen from '@/screens/settings/categories/create/CategoryFormScreen';
import { Container, GoBackBar } from '@/shared/components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CreateCategoryStackParamList } from './types';

const Stack = createNativeStackNavigator<CreateCategoryStackParamList>();

export default function CreateCategoryStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='CategoryForm'
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
                name='CategoryForm'
                component={CategoryFormScreen}
            />
        </Stack.Navigator>
    )
}