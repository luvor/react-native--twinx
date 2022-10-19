import * as React from 'react'

import { View, ScrollView, Text, StyleSheet } from 'react-native'

import { cups } from '../data/mock'

import { Card } from '../components'

const handlePress = () => {
  console.log('Button pressed')
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.cardContainer}>
        {cups.map((cup) => {
          return <Card key={cup.id} cup={cup} />
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fafafa',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
})
