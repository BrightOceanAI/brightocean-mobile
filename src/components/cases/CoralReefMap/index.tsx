import { Box } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

export default function CoralReefMap() {
  const INITIAL_REGION = {
    latitude: 37.33,
    longitude: -122,
    latitudeDelta: 2,
    longitudeDelta: 2,
  };

  return (
    <Box style={styles.container}>
      <MapView style={styles.map} initialRegion={INITIAL_REGION} />
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: "hidden",
  },

  map: {
    width: "100%",
    height: "100%",
  },
});
