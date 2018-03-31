import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Icon, FormLabel } from 'react-native-elements';
import FormInputs from '../components/form-inputs'


class LoginScreen extends React.PureComponent {
    static navigationOptions = {
        header: null
      };
      constructor(props) {
          super(props);
        this.state = {
            userName: '',
            password: ''
        }
      }

    onLogin = e => {
        
    }

    render() {
        return (
            <View style={styles.container}>
            <Card
              title="Login"
              tityleStyle={{fontSize: '300'}}
              containerStyle={{width: '95%', borderRadius: 10}}
            >
            <View>
                <FormLabel>User Name</FormLabel>
                <FormInputs
                    onChangeText={userName => this.setState({userName})} 
                    value={this.state.userName}
                />

                <FormLabel>Password</FormLabel>
                <FormInputs 
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}
                    secureTextEntry={true}
                />
                
            </View>
                <TouchableOpacity 
                    style={styles.btn}
                    onPress={this.onLogin}
                >
                    <Text style={styles.text}>
                        Login
                    </Text>
                </TouchableOpacity>
                </Card>                
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
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 20,
        marginBottom: 20
    },
    text: {
        textAlign: 'center',
        fontSize: 20
    }
})

export default LoginScreen