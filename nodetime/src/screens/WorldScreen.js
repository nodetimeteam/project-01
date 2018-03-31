import React from 'react';
import { Text, View, Image } from 'react-native';
// import 
import ASL from "../services/asl-svg.services";

class WorldScreen extends React.Component {
  render() {
    return (
      <View>
        <Image source={ASL.A} />
      </View>
    );
  };
};

export default WorldScreen;