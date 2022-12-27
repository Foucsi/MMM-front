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
import { login, logout } from "../reducers/users";
import { useEffect } from "react";

export default function RegisterScreen({ navigation }) {
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");
  const [profil, setProfil] = useState([]);
  const users = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const profils = ["Monteur", "Client"];

  const handleSubmit = () => {
    fetch("http://192.168.1.51:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: prenom,
        email: email,
        password: mdp,
        profil: users.profil,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          dispatch(login({ username: prenom, email: email, password: mdp }));
          console.log(true);
          console.log(users);
        } else {
          console.log(false);
        }
      });
  };

  const handleChecked = (e, i, txt) => {
    if (!i && users.profil.length === 0) {
      dispatch(login({ profil: txt }));
      e(true);
      fetch(`http://192.168.1.51:3000/users/profil/${prenom}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profil: txt }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.result) {
            console.log(users.profil.length);
            console.log(users.profil);
          } else {
            console.log(data.result);
          }
        });
    } else {
      dispatch(logout());
      e(false);
      fetch(`http://192.168.1.51:3000/users/removeProfil/${prenom}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profil: txt }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.result) {
            console.log("result", data.result);
          } else {
            console.log(data.result);
          }
        });
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ height: "15%", justifyContent: "center" }}>
        <Text>Bienvenue !</Text>
        <Text>Créer un nouveau compte</Text>
      </View>
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Prénom"
          value={prenom}
          onChangeText={(value) => setPrenom(value)}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
          style={styles.input}
        />
        <TextInput
          placeholder="Mot de passe"
          secureTextEntry={true}
          value={mdp}
          onChangeText={(value) => setMdp(value)}
          style={styles.input}
        />
        <Text>Vous étes ?</Text>
        {profils.map((elmt, index) => {
          const [isSelected, setIsSelected] = useState(false);
          return (
            <View
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: 200,
              }}
            >
              <CheckBox
                checked={isSelected}
                onPress={() => handleChecked(setIsSelected, isSelected, elmt)}
              />
              <Text>{elmt}</Text>
            </View>
          );
        })}
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
