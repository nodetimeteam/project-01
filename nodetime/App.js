import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginBackground from './src/screens/LoginBackground';
import LoginScreen from './src/screens/LoginScreen.1';
import WorldScreen from './src/screens/WorldsScreen';
import GameScreen from './src/screens/GameScreen';

// import FastHands from './src/screens/FastHands';


export default class App extends React.PureComponent {
  render() {
    return (
      <AppNavigation />
    );
  }
}

const AppNavigation = StackNavigator(
  {
    // LoginScreen: {
    //   screen: LoginScreen
    // },
    LoginBackground: {
      screen: LoginBackground
    },
    WorldScreen: {
      screen: WorldScreen
    },
    GameScreen: {
      screen: GameScreen
    },

    // FastHands: {
    //   screen: FastHands
    // },

  },
  {
    initialRouteName: 'LoginBackground',
    // initialRouteName: 'GameScreen',
    }
);

