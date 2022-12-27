import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <AntDesign
        name="back"
        size={24}
        color="black"
        onPress={() => navigation.navigate("Home")}
      />
      <Text>RegisterScreen</Text>
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
