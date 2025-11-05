import RootStack from '@/routes/RootStack';
import Root from '@/shared/infra/Root';
import { StatusBar } from 'expo-status-bar';
import './global.css';

export default function App() {
  return (
    <Root>
      <StatusBar style='dark' />
      <RootStack />
    </Root>
  );
}
