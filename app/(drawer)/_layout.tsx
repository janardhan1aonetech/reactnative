import { View, Text } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => {
  return (
  <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer />
      </GestureHandlerRootView>
  )
}

export default DrawerLayout