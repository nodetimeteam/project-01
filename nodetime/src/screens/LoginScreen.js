import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
// import { Card, Icon, FormLabel } from 'react-native-elements';
import FormInputs from '../components/form-inputs'


class LoginScreen extends React.PureComponent {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);

    }

    onLogin = e => {
        this.props.navigation.navigate('WorldScreen')
    }

    render() {
        return (
            <View style={styles.container}>


                <TouchableOpacity style={styles.btn} onPress={this.onLogin}>
                    <Text style={styles.input}>Continue</Text>
                </TouchableOpacity>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    btn: {
        height: 40,
        backgroundColor: '#D3D3D3',
        // marginBottom: 10,
        // color: '#333333',
        // paddingHorizontal: 10,
        // borderWidth: 1,
        // borderColor: '#000',
        borderRadius: 100,
        // paddingTop: 10,
        // paddingBottom: 10,
        // marginTop: 10,
        marginBottom: 50
    },
    input: {
        // height: 40,
        // backgroundColor: '#D3D3D3',
        // marginBottom: 10,
        color: 'black',
        textAlign: 'center',
        fontSize: 25
        // paddingHorizontal: 10
    }
})

export default LoginScreen