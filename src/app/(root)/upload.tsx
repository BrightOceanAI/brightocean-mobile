import StyledButton from '@/src/components/shared/Button'
import Colors from '@/src/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'
import { Box, Text } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Alert, Image, StyleSheet, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types'
import StyledInput from '@/src/components/shared/Input'
import { createCamera } from '@/src/api/services/analysis/create-camera'

export default function UploadAnalysisScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const [uploadStep, setUploadStep] = useState<'camera' | 'image'>('camera')
  const [cameraData, setCameraData] = useState({
    modeloCamera: '',
    localizacao: '',
    latitude: '',
    longitude: '',
  })
  const [selectedImage, setSelectedImage] =
    useState<ImagePicker.ImagePickerAsset | null>(null)

  const handleInputChange = (name: string, value: string) => {
    setCameraData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleChangeStep = async () => {
    if (uploadStep === 'camera') {
      await createCamera({
        modeloCamera: cameraData.modeloCamera,
        localizacao: cameraData.localizacao,
        latitude: Number(cameraData.latitude),
        longitude: Number(cameraData.longitude),
      })
        .then(() => {
          setUploadStep('image')
          Alert.alert('Câmera cadastrada com sucesso!')
        })
        .catch((err) => {
          Alert.alert('Erro ao cadastrar câmera. Tente novamente.')
          console.error(err)
        })
    } else {
      setUploadStep('camera')
    }
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    result.assets && setSelectedImage(result?.assets[0])
  }

  const sendAnalysis = async () => {
    Alert.alert('Análise enviada com sucesso!')

    navigation.navigate('index')
  }

  const deleteImage = () => {
    setSelectedImage(null)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Box style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('index')}>
          <Ionicons name="arrow-back" color={Colors.primary} size={32} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Começar uma análise</Text>
      </Box>

      {uploadStep === 'camera' ? (
        <Box style={styles.formContainer}>
          <Text style={styles.title}>Informações da câmera</Text>

          <Box style={styles.form}>
            <StyledInput
              onChangeText={(text) => handleInputChange('modeloCamera', text)}
              value={cameraData.modeloCamera}
              label="Modelo da câmera"
            />
            <StyledInput
              onChangeText={(text) => handleInputChange('localizacao', text)}
              value={cameraData.localizacao}
              label="Localização"
            />
            <StyledInput
              onChangeText={(text) => handleInputChange('latitude', text)}
              value={cameraData.latitude}
              label="Latitude"
              keyboardType="numeric"
            />
            <StyledInput
              onChangeText={(text) => handleInputChange('longitude', text)}
              value={cameraData.longitude}
              label="Longitude"
              keyboardType="numeric"
            />

            <Box style={styles.actions}>
              <StyledButton onPress={handleChangeStep}>Continuar</StyledButton>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box style={styles.sendFileContainer}>
          <Text style={styles.title}>Enviar um arquivo</Text>

          <Box style={styles.content}>
            <Box style={styles.selectedFile}>
              {selectedImage ? (
                <>
                  <Image
                    source={{ uri: selectedImage.uri }}
                    style={{ width: '100%', height: '100%', borderRadius: 10 }}
                  />
                </>
              ) : (
                <>
                  <Ionicons name="image-outline" color="#787878" size={48} />
                  <Text style={styles.selectFileText}>
                    Envie uma imagem para iniciar a análise.
                  </Text>
                </>
              )}
            </Box>

            <Box style={styles.actions}>
              <StyledButton
                onPress={selectedImage?.uri ? sendAnalysis : pickImage}
              >
                {selectedImage?.uri ? 'Continuar' : 'Selecionar arquivo'}
              </StyledButton>

              {selectedImage?.uri && (
                <StyledButton variant="outline" onPress={deleteImage}>
                  Apagar arquivo
                </StyledButton>
              )}

              <StyledButton
                variant="outline"
                onPress={() => setUploadStep('camera')}
              >
                Voltar
              </StyledButton>
            </Box>
          </Box>
        </Box>
      )}
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

  formContainer: { display: 'flex', gap: 10, marginTop: 30 },

  form: {
    display: 'flex',
    gap: 20,
    padding: 20,
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 10,
  },

  sendFileContainer: { width: '100%', marginTop: 30, display: 'flex', gap: 10 },

  content: {
    display: 'flex',
    gap: 20,
    padding: 10,
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 10,
  },

  selectedFile: {
    width: '100%',
    height: 240,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.lightBorder,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },

  selectFileText: {
    textAlign: 'center',
    fontSize: 22,
    color: '#787878',
  },

  actions: {
    display: 'flex',
    gap: 15,
    width: '100%',
  },
})
