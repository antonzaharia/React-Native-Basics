import React from "react";
import { StyleSheet, Text, SafeAreaView, Alert, Button } from "react-native";

export default function App() {
  const handlePress = () =>
    Alert.alert("My title", "My Message", [
      { text: "Yes", onPress: () => console.log("Yes") },
      { text: "No", onPress: () => console.log("No") },
    ]);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World</Text>
      <Button color="orange" title="Click me!" onPress={handlePress}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
