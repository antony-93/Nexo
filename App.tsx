import { SafeAreaProvider } from 'react-native-safe-area-context';
import './global.css';
import BillsScreen from '~/screens/BillsScreen';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Medium': Inter_500Medium,
    'Inter-SemiBold': Inter_600SemiBold,
    'Inter-Bold': Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <BillsScreen />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
