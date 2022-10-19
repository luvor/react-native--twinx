import React from 'react'

import { StyleSheet, FlatList, Text, Image, View, Dimensions, Animated, PanResponder } from 'react-native'

import { cups } from '../data/mock'

import { SwipeCard } from '../components'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default function SwipeScreen() {
  const position = React.useRef(new Animated.ValueXY()).current
  rotate = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 5, 0, SCREEN_WIDTH / 2],
    outputRange: ['-10deg', '0deg', '10deg'],
    extrapolate: 'clamp',
  })
  const [currentIndex, setCurrentIndex] = React.useState(1)
  const panResponder = React.useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onPanResponderMove: (evt, gestureState) => {
          position.setValue({ x: gestureState.dx, y: gestureState.dy })
        },
        onPanResponderRelease: (evt, gestureState) => {
          if (gestureState.dx > 120) {
            Animated.spring(position, {
              toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
            }).start(() => {
              setCurrentIndex(currentIndex + 1)
              if (currentIndex > cups.length - 2) {
                setCurrentIndex(1)
              }
              position.setValue({ x: 0, y: 0 })
            })
          } else if (gestureState.dx < -120) {
            Animated.spring(position, {
              toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
            }).start(() => {
              setCurrentIndex(currentIndex + 1)
              if (currentIndex > cups.length - 2) {
                setCurrentIndex(1)
              }
              position.setValue({ x: 0, y: 0 })
            })
          }
        },
      }),
    [currentIndex]
  )

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <SwipeCard cup={cups[currentIndex]} panResponder={panResponder} position={position} rotate={rotate} />
        <Image
          style={{
            flex: 1,
            height: null,
            width: null,
            resizeMode: 'cover',
            borderRadius: 20,
            margin: 10,
            marginBottom: 31,
            zIndex: -2,
          }}
          source={cups[currentIndex + 1].image}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})

// {cups.map((item, i) => {
//   if (i == currentIndex) {
//     return <SwipeCard key={i} cup={item} panResponder={panResponder} position={position} rotate={rotate} />
//   } else {
//     return (
//       <Animated.View
//         key={i}
//         style={{
//           height: SCREEN_HEIGHT - 120,
//           width: SCREEN_WIDTH,
//           padding: 10,
//           position: 'absolute',
//           zIndex: -i,
//         }}
//       >
//         <Image
//           style={{
//             flex: 1,
//             height: null,
//             width: null,
//             resizeMode: 'cover',
//             borderRadius: 20,
//           }}
//           source={item.image}
//         />
//       </Animated.View>
//     )
//   }
// })}

{
  /* 
<FlatList data={cups} renderItem={(item, index) => {
  return <SwipeCard key={index} cup={item.item} panResponder={panResponder} position={position} rotate={rotate} />
  }} /> */
}
