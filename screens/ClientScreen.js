import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";

export default function ClientScreen({ navigation }) {
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
        <Text>ClientScreen</Text>
      </View>
    </View>
  );
}
