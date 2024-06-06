import ItemList from "@/src/components/layout/ItemList";
import { useNavigation } from "expo-router";
import { Box, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

export default function CoralReefList() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <Box style={styles.historyContainer}>
      <Text style={styles.title}>Recifes analisados</Text>

      <Box style={styles.historyList}>
        <ItemList
          title="Nome do recife"
          description="Clique para visualizar"
          onPress={() => navigation.navigate("analysis")}
        />
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },

  title: {
    fontSize: 22,
  },

  historyContainer: { display: "flex", gap: 15, overflow: "hidden" },

  historyList: {
    width: "100%",
    minHeight: 200,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e3e3e3",
    overflow: "hidden",
  },
});
