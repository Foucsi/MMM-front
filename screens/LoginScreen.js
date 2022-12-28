import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
import { login } from "../reducers/users";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function LoginScreen({ navigation }) {
  const [prenom, setPrenom] = useState("");
  const [mdp, setMdp] = useState("");
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.value);

  const handleSubmit = () => {
    fetch("http://192.168.1.51:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: prenom,
        password: mdp,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          navigation.navigate("Welcome");
          dispatch(login({ username: prenom }));
          setMsg("");
        } else if (data.error === "Missing or empty fields") {
          setMsg("Missing or empty fields");
        } else if (data.error === "User not found or wrong password") {
          setMsg(
            <View>
              <Text style={{ color: "#ED6A5A" }}>
                User not found or wrong password
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setMdp("");
                  setPrenom("");
                  navigation.navigate("Register");
                }}
              >
                <Text
                  style={{
                    color: "#094074",
                    textDecorationLine: "underline",
                    textDecorationStyle: "solid",
                    textDecorationColor: "#094074",
                  }}
                >
                  s'enregistrer
                </Text>
              </TouchableOpacity>
            </View>
          );
        }
      });

    fetch(`http://192.168.1.51:3000/users/name/${users.username}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          dispatch(login({ username: data.user }));
        }
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Prenom"
          style={styles.input}
          autoCapitalize={false}
          value={prenom}
          onChangeText={(value) => setPrenom(value)}
        />
        <TextInput
          placeholder="Mot de passe"
          style={styles.input}
          autoCapitalize={false}
          secureTextEntry={true}
          value={mdp}
          onChangeText={(value) => setMdp(value)}
        />
        <Text style={{ color: "#ED6A5A" }}>{msg}</Text>
      </View>
      <View style={styles.containerBtn}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => handleSubmit()}
        >
          <Text style={styles.button}>Se connecter</Text>
        </TouchableOpacity>
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
  containerInput: {
    width: "90%",
    height: "35%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    width: "90%",
    borderBottomWidth: 1,
    borderBottomColor: "#094074",
    paddingBottom: 15,
    fontSize: 16,
  },
  button: {
    color: "#F2F2EB",
  },
  containerBtn: {
    alignItems: "center",
    width: "80%",
    height: "20%",
    justifyContent: "space-around",
  },
  touchable: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "80%",
    backgroundColor: "#094074",
    borderRadius: 5,
  },
});
