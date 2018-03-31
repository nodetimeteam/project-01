import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen';


export default class App extends React.PureComponent {
  render() {
   

    return (
      <AppNavigation />
    );
  }
}

const AppNavigation = StackNavigator({
  LoginScreen : {
    screen: LoginScreen
  }
})

