import { LoadExpenseGroupsQueryContextProvider } from '@/context/LoadExpenseGroupsQueryContext';
import { LoadExpensesByCategoryQueryContextProvider } from '@/context/LoadExpensesByCategoryQueryContext';
import DashboardScreen from '@/screens/dashboard/DashboardScreen';
import FinancesScreen from '@/screens/finances/FinancesScreen';
import SettingsScreen from '@/screens/settings/SettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Settings, Wallet } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeStackParamList } from './types';

const Tab = createBottomTabNavigator<HomeStackParamList>();

export default function HomeStack() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#1A1A1A',
                tabBarInactiveTintColor: '#9CA3AF',
                tabBarStyle: {
                    paddingTop: 4,
                    marginBottom: 4
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '500',
                }
            }}
            initialRouteName='Dashboard'
            screenLayout={({ children }) => (
                <SafeAreaView
                    className="bg-surface-primary flex-1"
                    edges={['top', 'left', 'right']}
                >
                    {children}
                </SafeAreaView>
            )}
        >
            <Tab.Screen
                name="Dashboard"
                options={{
                    tabBarLabel: 'Início',
                    tabBarIcon: ({ color }) => (
                        <Home size={22} color={color} />
                    )
                }}
            >
                {(props) => (
                    <LoadExpensesByCategoryQueryContextProvider>
                        <DashboardScreen {...props} />
                    </LoadExpensesByCategoryQueryContextProvider>
                )}
            </Tab.Screen>

            <Tab.Screen
                name="Finances"
                options={{
                    tabBarLabel: 'Finanças',
                    tabBarIcon: ({ color }) => (
                        <Wallet size={22} color={color} />
                    )
                }}
            >
                {(props) => (
                    <LoadExpenseGroupsQueryContextProvider>
                        <FinancesScreen {...props} />
                    </LoadExpenseGroupsQueryContextProvider>
                )}
            </Tab.Screen>

            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Configurações',
                    tabBarIcon: ({ color }) => (
                        <Settings size={22} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

