import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { ReactNode } from 'react';
import { Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

type RootProps = {
  children?: ReactNode
}

const queryClient = new QueryClient();

export default function Root({ children }: RootProps) {
  const [fontsLoaded] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Medium': Inter_500Medium,
    'Inter-SemiBold': Inter_600SemiBold,
    'Inter-Bold': Inter_700Bold,
  });

  if (!fontsLoaded) return <Text>Carregando</Text>;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <PaperProvider>
          <QueryClientProvider client={queryClient}>
            <BottomSheetModalProvider>
              <NavigationContainer
                onStateChange={(state) => {
                  if (state) {
                    const routes = state?.routes ?? [];
                    const current = routes[state.index];
                    const previous = routes[state.index - 1];
                    console.log("Anterior:", previous);
                    console.log("Atual:", current);
                  }
                }}
              >
                {children}
              </NavigationContainer>
            </BottomSheetModalProvider>
          </QueryClientProvider>
        </PaperProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
