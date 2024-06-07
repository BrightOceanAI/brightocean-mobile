import { Box, Text } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'

const NoReefsRegistered = () => {
  return (
    <Box style={styles.container}>
      <Text style={styles.title}>Nenhum recife registrado</Text>
      <Text style={styles.description}>
        Ainda não há nenhum recife registrado, acesse a tela de análise para
        iniciar
      </Text>
    </Box>
  )
}

export default NoReefsRegistered

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    display: 'flex',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 22,
    textAlign: 'center',
  },

  description: {
    fontSize: 18,
    textAlign: 'center',
  },
})
