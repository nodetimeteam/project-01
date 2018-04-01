import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

class HandComponent extends React.PureComponent {

	render() {
		return (
			<View>
				<Text>
					Hand
				</Text>
				<Text>
					Timeout
				</Text>
			</View>
		);
	};

};

export default HandComponent;