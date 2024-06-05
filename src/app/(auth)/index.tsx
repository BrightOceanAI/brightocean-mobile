import BottomDrawer from "@/src/components/layout/BottomDrawer";
import StyledButton from "@/src/components/shared/Button";
import { router, useNavigation } from "expo-router";
import { Box, View } from "native-base";
import React from "react";
import { Image, ImageBackground, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

export default function AuthChoice() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("@/assets/images/auth/auth-bg.png")}
      >
        <Box style={styles.brand}>
          <Image
            source={require("@/assets/images/brand/brand-logo.png")}
            style={styles.brandLogo}
          />
        </Box>

        <BottomDrawer
          title="Um oceano de possibilidades"
          description="Faça log-in ou crie uma conta"
          content={
            <Box style={styles.actions}>
              <StyledButton onPress={() => navigation.navigate("login")}>
                Entrar em uma conta
              </StyledButton>
              <StyledButton
                onPress={() => navigation.navigate("register")}
                variant="outline"
              >
                Ainda não tenho uma conta
              </StyledButton>
            </Box>
          }
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },

  backgroundImage: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
  },

  brand: {
    display: "flex",
    alignItems: "center",
    marginBottom: 50,
    paddingTop: 55,
  },

  brandLogo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  actions: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
});
