import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import BottomNav from './navigation/BottomNav'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <BottomNav />
      </NavigationContainer>
    </SafeAreaView>
  )
}
