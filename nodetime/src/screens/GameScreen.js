import React from 'react';
import { Text, View, Image, Alert } from 'react-native';
import { Card, Button } from 'react-native-elements';
import ASL from "../services/asl-svg.services";
import returnRandomLetter from "../services/letters-utility";

class GameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 1,
      currentLetter: "A",  
    };
    
  };

  componentDidMount() {
    this.setState({level: this.props.navigation.state.params.level});
  };

  nextImage = () => {
    let newLetter = returnRandomLetter(this.state.level);
    this.setState({currentLetter: newLetter});
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
          onPress={this.nextImage} 
          title={"Lvl " + this.state.level}  
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