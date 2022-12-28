import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { CheckBox } from "react-native-elements";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login } from "../reducers/users";

export default function RegisterScreen({ navigation }) {
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");
  const [msg, setMsg] = useState("");
  const users = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const handleNavigation = () => {
    navigation.navigate("Login");
    setEmail("");
    setMdp("");
    setPrenom("");
  };

  const handleSubmit = () => {
    fetch("http://192.168.1.51:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: prenom,
        email: email,
        password: mdp,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          dispatch(login({ username: prenom, email: email, password: mdp }));
          navigation.navigate("Welcome");
          setMsg("");
        } else if (data.error === "Missing or empty fields") {
          setMsg("Missing or empty fields");
        } else if (data.error === "your account already exists !") {
          setMsg(
            <View>
              <Text style={{ color: "#ED6A5A" }}>
                Your account already exists !
              </Text>
              <TouchableOpacity onPress={() => handleNavigation()}>
                <Text
                  style={{
                    color: "#094074",
                    textDecorationLine: "underline",
                    textDecorationStyle: "solid",
                    textDecorationColor: "#094074",
                  }}
                >
                  connection
                </Text>
              </TouchableOpacity>
            </View>
          );
        }
      });
  };

  return (
    <View style={styles.container}>
      <View style={{ height: "15%", justifyContent: "center" }}>
        <Text>Bienvenue !</Text>
        <Text>Créer un nouveau compte</Text>
      </View>
      <View style={styles.containerInput}>
        <TextInput
          autoCapitalize={false}
          placeholder="Prénom"
          value={prenom}
          onChangeText={(value) => setPrenom(value)}
          style={styles.input}
        />
        <TextInput
          autoCapitalize={false}
          placeholder="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
          style={styles.input}
        />
        <TextInput
          autoCapitalize={false}
          placeholder="Mot de passe"
          secureTextEntry={true}
          value={mdp}
          onChangeText={(value) => setMdp(value)}
          style={styles.input}
        />
        <Text style={{ color: "#ED6A5A" }}>{msg}</Text>
      </View>
      <View style={styles.containerBtn}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => handleSubmit()}
        >
          <Text style={styles.button}>S'enregistrer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
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
