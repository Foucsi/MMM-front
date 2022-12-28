import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login } from "../reducers/users";
import { useState } from "react";

export default function Card({ name, bg, txt, img, navigation }) {
  const users = useSelector((state) => state.user.value);
  const [profils, setProfil] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    fetch(`http://192.168.1.51:3000/users/profil/${users.username}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profil: name }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          dispatch(login({ profil: name }));
          console.log(data.result);
        }
      });

    fetch(`http://192.168.1.51:3000/users/info/${users.username}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          setProfil(data.user);
          dispatch(login({ profil: profils }));
        }
      });
    navigation.navigate(e);
  };
  return (
    <TouchableOpacity onPress={() => handleClick(name)}>
      <View style={styles(bg).card}>
        <FontAwesome5 name={img} size={38} color="#fff" />

        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 24,
          }}
        >
          {name}
        </Text>

        <Text style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>
          {txt}
        </Text>
      </View>
    </TouchableOpacity>
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
      padding: 10,
    },
  });
