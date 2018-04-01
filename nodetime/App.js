import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen';
import GameScreen from './src/screens/GameScreen';

export default class App extends React.PureComponent {
  render() {
    return (
      <AppNavigation />
    );
  }
}

const AppNavigation = StackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen
    },
    GameScreen: {
      screen: GameScreen
    },
  },
  {
    // initialRouteName: 'GameScreen',
    initialRouteName: 'LoginScreen',
  },
);

