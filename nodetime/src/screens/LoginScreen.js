import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

class LoginScreen extends React.PureComponent {
    static navigationOptions = {
        header: null
      };

    render() {
        return (
            <View>
                <Button
                    title="Submit Me"
                />
            </View>
        );
    }
}


const style = StyleSheet.create({
    button: {
        borderRadius: 50
    }
})

export default LoginScreen