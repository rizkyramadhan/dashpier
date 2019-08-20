import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './pages/Home';
import Cash from './pages/Cash';
import Bank from './pages/Bank';
import AP from './pages/AP';
import AR from './pages/AR';
import Statement from './pages/Statement';

const AppNavigator = createStackNavigator(
  {
    Home,
    Cash,
    Bank,
    AR,
    AP,
    Statement,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigator);
