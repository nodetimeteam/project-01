import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card } from 'react-native-elements';
import ASL from "../services/asl-svg.services";

class WorldScreen extends React.Component {
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

          <Image source={ASL.A} />

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