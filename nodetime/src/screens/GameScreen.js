import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';
import ASL from "../services/asl-svg.services";

class GameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLetter: "A"
    }
    
  };

  toggleFunction = () => {
    let list = [
      "A", "B", "C", "D", "E",
      // "F", "G", "H", "I", "J",
      // "K", "L", "M", "N", "O",
      // "P", "Q", "R", "S", "T",
      // "U", "V", "W", "X", "Y",
      // "Z", 
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    ];
    let nextIndex = list.indexOf(this.state.currentLetter) + 1;
    nextIndex = (nextIndex >= list.length) ? 0 : nextIndex;     // Loops back to start when you reach end
    this.setState({currentLetter: list[nextIndex]}); 
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >

        <Button 
          onPress={this.toggleFunction} title="Clik Me" 
        />

        {/* Progress Bar (Checkmark, X, Dots) */}
        <Card
          containerStyle={{ width: 375, height: 25, backgroundColor: 'black' }}
        >
        </Card>
        {/* /Progress Bar (Checkmark, X, Dots) */}

        {/* ASL Image */}
        <Card
          containerStyle={{ width: 375, height: 400 }}
          wrapperStyle={{ alignItems: 'center' }}
        >

          <Image source={ASL[this.state.currentLetter]} />

        </Card>
        {/* /ASL Image */}

        {/* Timer */}
        <Card
          containerStyle={{ width: 375, height: 100, backgroundColor: 'blue' }}
        // wrapperStyle={{ backgroundColor: 'blue' }}
        >
        </Card>
        {/* /Timer */}

      </View>
    );
  };
};

export default GameScreen;