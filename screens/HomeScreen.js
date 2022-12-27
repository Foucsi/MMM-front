import { Text, View, StyleSheet, ImageBackground } from "react-native";
import React, { Component } from "react";
import Hello from "../components/Hello";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Hello navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#094074",
  },
});
