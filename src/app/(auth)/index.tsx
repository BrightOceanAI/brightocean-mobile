import BottomDrawer from '@/src/components/layout/BottomDrawer'
import StyledButton from '@/src/components/shared/Button'
import { Box, View } from 'native-base'
import React from 'react'
import { Image, ImageBackground, StyleSheet } from 'react-native'

export default function AuthChoice() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('@/assets/images/auth/auth-bg.png')}
      >
        <Box style={styles.brand}>
          <Image
            source={require('@/assets/images/brand/brand-logo.png')}
            style={styles.brandLogo}
          />
        </Box>

        <BottomDrawer
          title="Um oceano de possibilidades"
          description="Faça log-in ou crie uma conta"
          content={
            <Box style={styles.actions}>
              <StyledButton>Entrar em uma conta</StyledButton>
              <StyledButton variant="outline">
                Ainda não tenho uma conta
              </StyledButton>
            </Box>
          }
        />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },

  backgroundImage: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },

  brand: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 50,
    paddingTop: 55,
  },

  brandLogo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  actions: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  },
})
