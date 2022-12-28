import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";

export default function MonteurScreen({ navigation }) {
  return (
    <View>
      <Header navigation={navigation} />
      <View
        style={{
          height: "85%",
          alignItems: "center",
          paddingTop: 30,
        }}
      >
        <Text>Monteur Screen</Text>
      </View>
    </View>
  );
}
