import React from 'react'
import { Text, View, Image } from 'react-native'

const Card = ({ cup }) => {
  return (
    <View style={styles.card}>
      <Image source={cup.image} style={styles.image} />
      <Text style={styles.cardTitle}>{cup.name}</Text>
      <Text style={styles.cardDescription}>{cup.description}</Text>
    </View>
  )
}
export default Card

const styles = {
  card: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    color: '#000',
    paddingBottom: 20,
    paddingHorizontal: 10,
    marginBottom: 30,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#999',
  },
  image: {
    flex: 1,
    height: 400,
    resizeMode: 'contain',
    borderRadius: 10,
    overflow: 'hidden',
    objectPosition: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 15,
  },
  cardDescription: {
    fontSize: 16,
  },
}
