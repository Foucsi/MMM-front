import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";

export default function Hello({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#F2F2EB", fontSize: 32 }}>Bienvenue !</Text>
      <View style={styles.containerBtn}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.button}>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.button}>S'enregistrer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "40%",
    width: "70%",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  button: {
    color: "#000",
  },
  containerBtn: {
    alignItems: "center",
    width: "80%",
    height: "40%",
    justifyContent: "space-around",
  },
  touchable: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "80%",
    backgroundColor: "#F2F2EB",
    borderRadius: 5,
  },
});
