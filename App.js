import React from "react";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { StyleSheet } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  const { landscape } = useDeviceOrientation();

  return <ViewImageScreen />;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
