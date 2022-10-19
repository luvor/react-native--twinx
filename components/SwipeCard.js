import React from 'react'
import { Text, View, Image, Animated, Dimensions } from 'react-native'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const Card = ({ cup, panResponder, rotate, position }) => {
  console.log('Card', cup)
  const rotateAndTranslate = {
    transform: [
      {
        rotate: rotate,
      },
      ...position.getTranslateTransform(),
    ],
  }
  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        {
          height: SCREEN_HEIGHT - 120,
          width: SCREEN_WIDTH,
          padding: 10,
          position: 'absolute',
        },
        rotateAndTranslate,
      ]}
    >
      <Image
        source={cup.image}
        style={{
          flex: 1,
          height: null,
          width: null,
          resizeMode: 'cover',
          borderRadius: 20,
        }}
      />

      {/* <View style={styles.card}>
        <Image source={cup.image} style={styles.image} />
        <Text style={styles.cardTitle}>{cup.name}</Text>
        <Text style={styles.cardDescription}>{cup.description}</Text>
      </View> */}
    </Animated.View>
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
