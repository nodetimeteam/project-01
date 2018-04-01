import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-elements';
import ASL from "../services/asl-svg.services";
import HandComponent from '../../src/components/hand.component'

class WorldScreen extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {};
	};

	goToWorld(level) {
		this.props.navigation.navigate('GameScreen', {level: level});
	};

	render() {
		const levelsList = [1, 2, 3, 4, 5, 6, 7];
		let levels = levelsList.map(lvl => {
			return (
				<TouchableOpacity
					key={lvl}
					style={styles.button}
					onPress={this.goToWorld.bind(this, lvl)}
				>
					<Text style={{ fontSize: 20 }}>
						Level {lvl}
					</Text>

				</TouchableOpacity>
				
			)
		})

		return (
			<View style={styles.container}>
				{levels}
				<HandComponent />
			</View>
		);
	};

};

export default WorldScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'wrap'
		
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#DDDDDD',
		padding: 10,
		margin: 25,
		width: 150

	}
});