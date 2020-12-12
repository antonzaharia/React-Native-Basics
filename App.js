import React from "react";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { StyleSheet } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  const { landscape } = useDeviceOrientation();

  return <WelcomeScreen />;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
