import BottomDrawer from '@/src/components/layout/BottomDrawer'
import { Button, Text, View } from 'native-base'
import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'

export default function AuthChoice() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('@/assets/images/auth/auth-bg.jpg')}
      >
        <BottomDrawer
          title="Navegando o futuro"
          description="Faça log-in ou crie uma conta"
          content={<></>}
        />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },

  backgroundImage: { flex: 1, display: 'flex', justifyContent: 'flex-end' },
})
