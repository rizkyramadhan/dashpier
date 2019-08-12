import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './src/Home';
import Raw from './src/Raw';
import Trx from './src/Trx';

const AppNavigator = createStackNavigator(
  {
    Home,
    Raw,
    Trx
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigator);
