import { createAccount } from "@/src/api/services/auth/create-account";
import StyledButton from "@/src/components/shared/Button";
import StyledInput from "@/src/components/shared/Input";
import Colors from "@/src/constants/Colors";
import { useNavigation } from "expo-router";
import { Box } from "native-base";
import React, { useEffect, useState } from "react";
import { Alert, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

export default function RegisterScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const handleInputChange = (name: string, value: string) => {
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUp = () => {
    if (
      !userData.name ||
      !userData.email ||
      !userData.cpf ||
      !userData.password
    ) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    createAccount(userData)
      .then(() => {
        navigation.navigate("login");

        Alert.alert("Pronto", "Conta criada com sucesso!");
        return;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <SafeAreaView
      style={{
        display: "flex",
        alignItems: "center",
        flex: 1,
        backgroundColor: "white",
        overflow: "hidden",
      }}
    >
      <Box style={styles.circleContainer}>
        <Box>
          <Image
            source={require("@/assets/images/brand/brand-logotype.png")}
            style={styles.brand}
          />
        </Box>
      </Box>

      <Box style={styles.content}>
        <Box style={styles.form}>
          <StyledInput
            onChangeText={(text) => handleInputChange("name", text)}
            value={userData.name}
            label="Nome"
          />
          <StyledInput
            onChangeText={(text) => handleInputChange("email", text)}
            value={userData.email}
            label="E-mail"
          />
          <StyledInput
            onChangeText={(text) => handleInputChange("cpf", text)}
            value={userData.cpf}
            label="CPF"
          />
          <StyledInput
            onChangeText={(text) => handleInputChange("password", text)}
            value={userData.password}
            label="Senha"
          />
        </Box>

        <Box style={styles.actions}>
          <StyledButton onPress={handleSignUp}>Criar conta</StyledButton>
          <StyledButton
            onPress={() => navigation.navigate("login")}
            variant="outline"
          >
            Já tenho uma conta
          </StyledButton>
        </Box>
      </Box>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  circleContainer: {
    width: 500,
    height: 200,
    marginTop: -100,
    backgroundColor: Colors.primary,
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },

  brand: {
    width: 200,
    marginTop: 90,
    resizeMode: "contain",
  },

  // form
  form: {
    marginTop: 40,
    paddingHorizontal: 24,
    width: "100%",
    display: "flex",
    gap: 40,
  },

  actions: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 30,
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
  },
});
