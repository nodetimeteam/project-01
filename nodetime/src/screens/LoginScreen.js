import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


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