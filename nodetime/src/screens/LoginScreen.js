import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


class LoginScreen extends React.PureComponent {
    static navigationOptions = {
        header: null
      };

    onLogin = e => {
        // this does stuff either in node or it will login someone
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.btn}
                    onPress={this.onLogin}
                >
                    <Text style={styles.text}>
                        Login
                    </Text>
                </TouchableOpacity>                
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 50,
        width: 300,
        paddingTop: 20,
        paddingBottom: 20
    },
    text: {
        textAlign: 'center',
        fontSize: 20
    }
})

export default LoginScreen