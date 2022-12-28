import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Card({ name, bg, txt, img, navigation }) {
  const handleClick = (e) => {
    navigation.navigate(e);
  };
  return (
    <View style={styles(bg).card}>
      <FontAwesome5 name={img} size={38} color="#fff" />
      <TouchableOpacity onPress={() => handleClick(name)}>
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          {name}
        </Text>
      </TouchableOpacity>
      <Text style={{ color: "#fff", textAlign: "center" }}>{txt}</Text>
    </View>
  );
}

const styles = (bg) =>
  StyleSheet.create({
    card: {
      backgroundColor: bg,
      width: 200,
      height: 200,
      borderRadius: 5,
      justifyContent: "space-around",
      alignItems: "center",
    },
  });
