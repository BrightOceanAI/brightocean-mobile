import { Box, Text } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'

interface BottomDrawerProps {
  title: string
  description: string
  content?: React.ReactNode
}

export default function BottomDrawer({
  title,
  description,
  content,
}: BottomDrawerProps) {
  return (
    <Box style={styles.container}>
      <Box style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
      </Box>

      <Box style={styles.content}>
        <Text style={styles.contentDescription}>{description}</Text>
      </Box>

      <Box>{content}</Box>
    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
  },

  header: { marginBottom: 10 },

  headerTitle: {
    // paddingTop: 10,
    fontSize: 26,
    fontWeight: 400,
    lineHeight: 30,
  },

  content: {
    marginBottom: 30,
  },

  contentDescription: { fontSize: 20, color: '#858585' },
})
