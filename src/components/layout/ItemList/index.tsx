import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'
import { Box, Text } from 'native-base'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types'

interface ListItemProps {
  onPress: () => void
  title: string
  description: string
}

export default function ListItem({
  onPress,
  title,
  description,
}: ListItemProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box style={styles.container}>
        <Box style={styles.icon}>
          <Ionicons name="analytics" size={32} color="#67e354" />
        </Box>

        <Box style={styles.data}>
          <Text style={styles.dataTitle}>{title}</Text>
          <Text style={styles.dataDescription}>{description}</Text>
        </Box>
      </Box>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 12,
    gap: 10,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },

  icon: {},

  data: {},

  dataTitle: {
    fontSize: 18,
    fontWeight: 500,
  },

  dataDescription: {
    fontSize: 16,
    fontWeight: 400,
  },
})
