import CoralReefMap from '@/src/components/cases/CoralReefMap'
import Colors from '@/src/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'
import { Box, Text, View } from 'native-base'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types'

export default function AnalysisScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  return (
    <SafeAreaView style={styles.container}>
      <Box style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('index')}>
          <Ionicons name="arrow-back" color={Colors.primary} size={32} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Nome do recife</Text>
      </Box>

      <Box style={styles.mapContainer}>
        <CoralReefMap />
      </Box>

      <Box style={styles.analysisData}>
        <Text style={styles.title}>Informações da análise</Text>

        <Box style={styles.content}>
          <Box style={styles.contentField}>
            <Text style={styles.contentFieldTitle}>Saúde do recife</Text>

            <Text style={styles.contentHealth}>NORMAL</Text>
          </Box>

          <Box style={styles.contentField}>
            <Text style={styles.contentFieldTitle}>Data da análise</Text>

            <Text style={styles.contentDate}>06/06/2024</Text>
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },

  title: {
    fontSize: 20,
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginBottom: 30,
  },

  headerTitle: {
    fontSize: 22,
    marginTop: 6,
  },

  mapContainer: {
    width: '100%',
    height: 240,
  },

  analysisData: { width: '100%', marginTop: 30, display: 'flex', gap: 10 },

  content: {
    display: 'flex',
    gap: 20,
    padding: 10,
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 10,
  },

  contentField: {
    display: 'flex',
    gap: 6,
  },

  contentFieldTitle: {
    fontSize: 16,
  },

  contentHealth: {
    display: 'flex',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 100,
    backgroundColor: '#32a852',
    color: 'white',
    fontWeight: 600,
  },

  contentDate: {
    display: 'flex',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 100,
    backgroundColor: '#f2f2f2',
    color: '#525252',
    fontWeight: 600,
  },
})
