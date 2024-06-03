import { Text, View } from 'native-base'
import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'

export default function AuthChoice() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('@/assets/images/auth/auth-bg.jpg')}
      ></ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundImage: { flex: 1 },

  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
})
