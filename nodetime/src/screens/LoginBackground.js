import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, Button } from 'react-native'
// import LoginScreen from './LoginScreen'
import CheckBox from 'react-native-checkbox'
export default class LoginBackground extends Component {
    static navigationOptions = {
        header: null
    };
    onLogin = e => {
        this.props.navigation.navigate('WorldScreen')
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                </View>
                <View style={styles.logoContainer}>
                    <Text style={styles.header}>Swift Hands</Text>
                    {/* <Text style={styles.title}>FAST HANDS</Text> */}
                    <Image
                        style={styles.logo}
                        source={require('../images/fastHands.png')}
                    />
                    {/* <Text style={styles.title}>Fast Hands: where you come to practice the swiftness of your quick hands.</Text> */}
                </View>
                <View style={styles.formContainer}>
                    {/* <LoginScreen /> */}
                    <View style={styles.container2}>
                        <TouchableOpacity style={styles.btn} onPress={this.onLogin}>
                            <Text style={styles.input}>Continue</Text>
                        </TouchableOpacity>
                        <CheckBox style={styles.checkbox}
                            label='Agree to terms and conditions'
                            checked={true}
                            onChange={(checked) => console.log('I am checked', checked)}
                        />
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container2: {
        padding: 20
    },
    header: {
        fontFamily: 'ZapfinoLinotypeOne',
        color: 'white',
        fontSize: 85,
        textAlign: 'center',
        marginLeft: 20
    },
    container: {
        flex: 1,
        backgroundColor: 'rgb(0,0,0)'
    },
    logoContainer: {
        marginRight: 20,
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginTop: 100
    },
    logo: {
        width: 300,
        height: 300
    },
    title: {
        color: 'white',
        textAlign: 'center',
        // opacity: 0.9
    },
    btn: {
        height: 40,
        backgroundColor: '#1E90FF',
        borderRadius: 100,
        marginBottom: 65
    },
    input: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25
    }
})