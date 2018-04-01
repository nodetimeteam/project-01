import React from 'react';
import { Text, View, Image, Alert } from 'react-native';
import { Card, Button } from 'react-native-elements';
import returnRandomLetter from '../services/letters-utility';   // Provides random letters
import ASL from '../services/asl-svg.services';                 // ASL Image files

// Game lifecycle components
import HandComponent from '../components/hand.component';
import SpeakComponent from '../components/speak.component';
import CorrectResponseComponent from '../components/thumbs-up.component';
import WrongResponseComponent from '../components/thumbs-down.component';
import MatchCompleteComponent from '../components/summary.component';

class GameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 1,
      currentComponent: false,
      remainingBar: 0,
      currentDecrement: .25,
      currentLetter: "",
      userAnswer: "",
      HandComponent: {
        letter: "",
        displayInSeconds: 4
      },
      SpeakComponent: {
        usersAnswer: ""
      },
      CorrectResponseComponent: "",
      WrongResponseComponent: "",
      MatchCompleteComponent: "",
      currentQuestionIndex: 0,
      userScore: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };

    // this.nextImage = this.nextImage.bind(this);
    // this.updateRemainingBar = this.updateRemainingBar.bind(this);

  };

  // Begins game by going to starting point of showing an ASL image
  componentDidMount() {
    let newLevel = this.props.navigation.state.params.level
    let newLetter = returnRandomLetter(newLevel)
    this.setState(
      {
        level: newLevel,
        currentComponent: "HandComponent",
        remainingBar: 1, 
        currentLetter: newLetter
      }
      // ,
      // () => {
      //   this.interval = setInterval(this.updateRemainingBar(), 1000);
      // }
    );

  };

  // updateRemainingBar() {
  //   if (this.state.remainingBar <= 0) {
  //     clearInterval(this.interval);
  //   } else {

  //   }
  // };

  returnNextComponent() {
    switch (this.state.currentComponent) {
      case "HandComponent":
        return "SpeakComponent";
        break;

      case "SpeakComponent":
        if (this.state.HandComponent.letter === this.state.SpeakComponent.usersAnswer) {
          return "CorrectResponseComponent";
        } else {
          return "WrongResponseComponent";
        };
        break;

      // case "CorrectResponseComponent":
      //   if () {
      //     return 
      //   }
      //   break;
    }
  };

  // nextImage() { 
  //   this.setState({ currentLetter: returnRandomLetter(this.state.level) });
  // };

  render() {
    alert(JSON.stringify(ASL[this.state.currentLetter]));
    let gameWindow = null;
    if (this.state.currentComponent) {
      gameWindow = <HandComponent
        image={ASL[this.state.currentLetter]}
        remainingBar={this.state.remainingBar}
        userScore={this.state.userScore}
      />
    }

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >

        {/* <Button
          onPress={this.nextImage}
          title={"Lvl " + this.state.level}
        /> */}

        {/* Progress Bar (Checkmark, X, Dots) */}
        <Card
          containerStyle={{ width: 375, height: 25, backgroundColor: 'black' }}
        >
        </Card>
        {/* /Progress Bar (Checkmark, X, Dots) */}

        {gameWindow}

      </View>
    );
  };
};

export default GameScreen;