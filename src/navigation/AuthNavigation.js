
import { createStackNavigator } from 'react-navigation-stack'
import Login from '../pages/LoginPage'
import Register from '../pages/RegisterPage'

const AuthNavigation = createStackNavigator(
  {
    Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
    Register: {
    screen: Register,
    navigationOptions: {
      header: null,
    },
  },
  },
  {
    initialRouteName: 'Login'
  },
)

export default AuthNavigation