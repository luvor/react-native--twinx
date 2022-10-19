import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
const Button = ({ title, cb }) => {
	return (
		<TouchableOpacity style={{ backgroundColor: '#FF9494', width: '80%', alignSelf: 'center', marginVertical: 20 }} onPress={() => cb()}>
			<Text style={{ color: 'white', padding: 10, alignSelf: 'center' }}>{title}</Text>
		</TouchableOpacity>
	)
}
export default Button
