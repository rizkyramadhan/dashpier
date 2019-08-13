import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './src/Home';
import Raw from './src/Raw';
import Trx from './src/Trx';
import Balance from './src/Balance';
import Pnl from './src/Pnl';

const AppNavigator = createStackNavigator(
  {
    Home,
    Raw,
    Balance,
    Pnl,
    Trx
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigator);
