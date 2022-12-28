import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";

export default function Welcome({ navigation }) {
  const users = useSelector((state) => state.user.value);
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View
        style={{
          height: "85%",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
