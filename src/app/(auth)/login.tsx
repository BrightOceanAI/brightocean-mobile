import StyledButton from "@/src/components/shared/Button";
import StyledInput from "@/src/components/shared/Input";
import Colors from "@/src/constants/Colors";
import { useNavigation } from "expo-router";
import { Box, Text } from "native-base";
import React from "react";
import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

export default function LoginScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeAreaView
      style={{
        display: "flex",
        // justifyContent: "space-between",
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
          <StyledInput label="E-mail" />
          <StyledInput label="Senha" />
        </Box>

        <Box style={styles.actions}>
          <StyledButton>Entrar na conta</StyledButton>
          <StyledButton
            onPress={() => navigation.navigate("register")}
            variant="outline"
          >
            Ainda não tenho uma conta
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
