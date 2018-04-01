import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements';
import * as Progress from 'react-native-progress';
import ASL from '../services/asl-svg.services';


class HandComponent extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View>
            <Card>
                <Image source={this.props.image} />
                <Card>
                <Progress.Bar
                    style={styles.progress}
                    progress={this.props.remainingBar}
                    />
                </Card>
            </Card>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    progress: {
      margin: 10,
    },
  });
  

export default HandComponent
