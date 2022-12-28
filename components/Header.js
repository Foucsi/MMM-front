import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { logout } from "../reducers/users";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Header({ navigation }) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.value);

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate("Home");
  };
  return (
    <View style={styles.header}>
      <AntDesign
        name="home"
        size={32}
        color="#fff"
        onPress={() => navigation.navigate("Home")}
      />
      <Text style={{ color: "#fff" }}>Bienvenue {users.username} !</Text>
      <AntDesign
        name="logout"
        size={30}
        color="#fff"
        onPress={() => handleLogout()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "15%",
    backgroundColor: "#094074",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
    flexDirection: "row",
    paddingBottom: 30,
  },
});
