// Import libraries for making a component
import React from 'react';
import { Text } from 'react-native';

// Make a component
const Header = () => {
	const { textStyle } = styles;

	return <Text style={textStyle}>Albums!</Text>;
};

const styles = {
	textStyles: {
		fontSize: 20
	}
};

// Make the component avalible to other parts of the app

export default Header;
