import * as React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'

import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'

const Tab = createBottomTabNavigator()

export default function BottomNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline'
          } else if (route.name === 'Login') {
            iconName = 'ios-list'
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
    </Tab.Navigator>
  )
}
