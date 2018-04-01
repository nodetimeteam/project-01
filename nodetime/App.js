import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen';
import WorldScreen from './src/screens/WorldsScreen';
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
    WorldScreen: {
      screen: WorldScreen
    },
    GameScreen: {
      screen: GameScreen
    }
  },
  {
    initialRouteName: 'LoginScreen',
  },
);

