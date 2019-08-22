import {createStackNavigator, createAppContainer} from 'react-navigation';
import {APP_ROUTE} from '../GlobalConstants/Constants';
import UserDetail from '../src/UserDetail/UserDetail';
import Dashboard from '../src/Dashboard/Dashboard';

const navigator = createStackNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        title: 'Users',
        headerTitleStyle: {
          fontSize: 20,
        },
      },
    },
    UserDetail: {
      screen: UserDetail,
      navigationOptions: {
        title: 'UserDetail',
        headerTitleStyle: {
          fontSize: 20,
        },
      },
    },
  },
  {
    initialRouteName: APP_ROUTE.Dashboard,
  },
);

const Router = createAppContainer(navigator);

export default Router;
