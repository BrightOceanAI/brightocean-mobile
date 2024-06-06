import { Box, Text, View } from "native-base";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CoralReefList from "../../components/cases/CoralReefList";
import MapView from "react-native-maps";
import { useAuth } from "@/src/contexts/AuthContext";
import Colors from "@/src/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function MainScreen() {
  const { user, signOut } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <Box style={styles.header}>
        <Text style={styles.title}>Olá, {user?.nome}.</Text>

        <TouchableOpacity onPress={signOut}>
          <Ionicons name="exit-outline" size={26} color={Colors.primary} />
        </TouchableOpacity>
      </Box>

      <Box style={styles.content}>
        <Box style={styles.mapContainer}>
          <MapView style={styles.map} />
        </Box>

        <CoralReefList />
      </Box>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },

  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    borderLeftWidth: 4,
    borderColor: Colors.primary,
    borderRadius: 4,
    paddingLeft: 10,
    paddingTop: 4,
    fontSize: 22,
  },

  content: { display: "flex", gap: 40 },

  mapContainer: {
    width: "100%",
    height: 180,
    backgroundColor: "#d4d4d4",
    marginTop: 30,
    borderRadius: 10,
    overflow: "hidden",
  },

  map: {
    width: "100%",
    height: "100%",
  },
});
