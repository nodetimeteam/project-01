import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FormInput } from 'react-native-elements';

class FormInputs extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <FormInput 
                style={styles.input}
                {...this.props}
            />
        );
    }
}

const styles = StyleSheet.create({
    input: {
        width: 150,
        marginBottom: 30
    }
})

export default FormInputs