import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { CheckBox } from "react-native-elements";
import { useState } from "react";
import Card from "../components/Card";
import dataCard from "../dataCard.json";
import { useEffect } from "react";
import { login } from "../reducers/users";
import { useDispatch } from "react-redux";

export default function Welcome({ navigation }) {
  const users = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://192.168.1.51:3000/users/name/${users.username}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          dispatch(login({ username: data.user }));
        }
      });
  }, []);

  const card = dataCard.map((elmt) => {
    return (
      <Card
        key={elmt.id}
        name={elmt.name}
        bg={elmt.bg}
        txt={elmt.txt}
        img={elmt.img}
        navigation={navigation}
      />
    );
  });
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View
        style={{
          height: "85%",
          alignItems: "center",
          paddingTop: 30,
        }}
      >
        <View style={styles.containerCard}>{card}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerCard: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
