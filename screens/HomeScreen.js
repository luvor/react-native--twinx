import * as React from 'react'

import { View, Text, StyleSheet } from 'react-native'

import { Button } from '../components'

const handlePress = () => {
  console.log('Button pressed')
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title={'Go to Details'} cb={handlePress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
