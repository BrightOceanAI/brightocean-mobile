import Colors from '@/src/constants/Colors'
import { useNavigation } from 'expo-router'
import { Box, Text } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types'
import ListItem from '../../layout/ItemList'
import NoReefsRegistered from '../NoReefsRegistered'

export default function CoralReefList() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const coralReefsList = ['a']

  return (
    <Box style={styles.historyContainer}>
      <Text style={styles.title}>Recifes analisados</Text>

      <Box style={styles.historyList}>
        {coralReefsList.length ? (
          <ListItem
            title="Recife #01"
            description="Clique para visualizar"
            onPress={() => navigation.navigate('analysis')}
          />
        ) : (
          <NoReefsRegistered />
        )}
      </Box>
    </Box>
  )
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },

  title: {
    fontSize: 22,
  },

  historyContainer: { display: 'flex', gap: 15, overflow: 'hidden' },

  historyList: {
    width: '100%',
    minHeight: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.lightBorder,
    overflow: 'hidden',
  },
})
