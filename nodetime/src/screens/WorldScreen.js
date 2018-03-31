import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';
import ASL from "../services/asl-svg.services";

class WorldScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLetter: "A"
    }
    
  };

  toggleFunction = () => {
    (this.state.currentLetter === "A")
      ? this.setState({currentLetter: "B"})
      : this.setState({currentLetter: "A"});
    ; 
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

export default WorldScreen;