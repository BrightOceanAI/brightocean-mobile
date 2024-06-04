import { Button } from 'native-base'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { ButtonVariantsTyping, getButtonVariant } from './variants'

interface StyledButtonProps {
  children: React.ReactNode
  variant?: ButtonVariantsTyping
}

export default function StyledButton({ children, variant }: StyledButtonProps) {
  const variantStyles = getButtonVariant(variant)

  return (
    <Button
      style={[styles.container, variantStyles.container]}
      _text={{ fontSize: 18, fontWeight: 600, color: variantStyles.fontColor }}
    >
      {children}
    </Button>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    borderRadius: 100,
    fontWeight: 700,
    fontSize: 24,
  },
})
