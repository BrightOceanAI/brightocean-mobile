import { Text, View } from 'native-base'
import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'

export default function AuthChoice() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground style={styles.backgroundImage}></ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {},

  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
})
