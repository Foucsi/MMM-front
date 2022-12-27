import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Welcome() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
