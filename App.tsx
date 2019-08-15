import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './src/pages/Home';
import Raw from './src/pages/Raw';
import Cboh from './src/pages/Cboh';
import Exp from './src/pages/Exp';
import IncStm from './src/pages/IncStm';
import Payb from './src/pages/Payb';
import Recv from './src/pages/Recv';
import Rev from './src/pages/Rev';
import Trx from './src/pages/Trx';


const AppNavigator = createStackNavigator(
  {
    Home,
    Raw,
    Trx,
    Cboh,
    Exp,
    IncStm,
    Payb,
    Recv,
    Rev
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigator);
