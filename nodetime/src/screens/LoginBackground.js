import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import LoginScreen from './LoginScreen'

export default class LoginBackground extends Component {
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
                    <LoginScreen />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
        justifyContent: 'center'
    },
    logo: {
        width: 200,
        height: 200
    },
    title: {
        color: 'white',
        textAlign: 'center',
        // opacity: 0.9
    }
})