import Router from '@/routes/Router';
import Root from '@/shared/infra/Root';
import { StatusBar } from 'expo-status-bar';
import './global.css';

export default function App() {
  return (
    <Root>
      <StatusBar style='dark' />
      <Router />
    </Root>
  );
}
