import Colors from "@/src/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Stack, Tabs } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          position: "absolute",
          height: 60,
          margin: 10,
          borderRadius: 20,
          borderTopWidth: 0,
          backgroundColor: "white",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: "Página principal",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-sharp" color={color} size={size} /> // Ajuste o tamanho do ícone
          ),
        }}
      />
      <Tabs.Screen
        name="upload"
        options={{
          headerShown: false,
          tabBarLabel: "Iniciar análise",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cloud-upload" color={color} size={size} /> // Ajuste o tamanho do ícone
          ),
        }}
      />
      <Tabs.Screen
        name="analysis"
        options={{
          headerShown: false,
          tabBarButton: () => null,
        }}
      />
    </Tabs>
  );
}
