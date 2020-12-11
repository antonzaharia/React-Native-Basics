import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Alert,
  Button,
  View,
  Dimentions,
} from "react-native";

export default function App() {
  const handlePress = () =>
    Alert.alert("My title", "My Message", [
      { text: "Yes", onPress: () => console.log("Yes") },
      { text: "No", onPress: () => console.log("No") },
    ]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.div}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  div: {
    backgroundColor: "dodgerblue",
    width: "50%",
    height: 70,
  },
});
