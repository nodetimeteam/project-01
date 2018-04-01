import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements';
import * as Progress from 'react-native-progress';
import ASL from '../services/asl-svg.services';


class HandComponent extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     this.progressCountdown();
    // }
    
    // progressCountdown = () => {
    //     let progress = 0;
    //     this.setState({ progress });
    //       setInterval(() => {
    //         progress += Math.random() / 5;
    //         if (progress > 1) {
    //           progress = 1;
    //         }
    //         this.setState({ progress });
    //       }, 500);
    // }

    render() {
        console.log(this.props)
        return(
            <View>
            <Card>
                <Image source={this.props.currentLetter} />
                <Progress.Bar
                    style={styles.progress}
                    progress={this.props.remainingBar}
                    />
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
