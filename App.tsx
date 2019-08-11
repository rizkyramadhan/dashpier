import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './src/Home';
import Raw from './src/Raw';

const AppNavigator = createStackNavigator(
  {
    Home,
    Raw
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigator);
