import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import styles from "./styles";

import api from "../../service/api";

import Toast from "react-native-toast-message";

function Register() {
  const navigation = useNavigation();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [password_confirm, setPasswordConfirm] = useState();

  async function handleRegister() {
    try {
      console.log(name, email, phone, login, password, password_confirm);
      if (password == password_confirm) {
        const response = await api.post("register", {
          name,
          email,
          phone,
          login,
          password,
        });

        console.log(response, "response in register");
        /*
        Toast.show({
          text1: "Cadastro realizado com sucesso!",
          autoHide: true,
          visibilityTime: 2000,
          position: "top",
          type: "success",
          onHide: () => {
            navigateBack();
          },
        });*/
      } else {
        /*
        Toast.show({
          text1: "Erro",
          text2: "Dados inválidos!",
          autoHide: true,
          visibilityTime: 2000,
          position: "top",
          type: "error",
        });
        */
      }
    } catch (error) {
      console.log(error, "error in register");
      /*
      Toast.show({
        text1: "Erro",
        text2: "Dados inválidos!",
        autoHide: true,
        visibilityTime: 2000,
        position: "top",
        type: "error",
      });
      */
    }
  }

  function navigateBack() {
    navigation.goBack();
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.back} onPress={navigateBack}>
            <Feather name="chevron-left" size={36} color="#FFF"></Feather>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(value) => setName(value)}
            placeholder="Nome"
            keyboardAppearance="dark"
            selectionColor="#FFF"
            placeholderTextColor="#CCC"
          />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(value) => setEmail(value)}
            placeholder="Email"
            keyboardAppearance="dark"
            selectionColor="#FFF"
            placeholderTextColor="#CCC"
          />
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={(value) => setPhone(value)}
            placeholder="Telefone"
            keyboardAppearance="dark"
            selectionColor="#FFF"
            keyboardType="numeric"
            placeholderTextColor="#CCC"
          />
          <TextInput
            style={styles.input}
            value={login}
            onChangeText={(value) => setLogin(value)}
            placeholder="Login"
            keyboardAppearance="dark"
            selectionColor="#FFF"
            placeholderTextColor="#CCC"
          />
          <TextInput
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={(value) => setPassword(value)}
            placeholder="Senha"
            keyboardAppearance="dark"
            selectionColor="#FFF"
            placeholderTextColor="#CCC"
          />
          <TextInput
            style={styles.input}
            secureTextEntry
            value={password_confirm}
            onChangeText={(value) => setPasswordConfirm(value)}
            placeholder="Confirmar senha"
            keyboardAppearance="dark"
            selectionColor="#FFF"
            placeholderTextColor="#CCC"
          />

          <TouchableOpacity style={styles.register} onPress={handleRegister}>
            <Text style={styles.registerText}>Cadastrar</Text>
          </TouchableOpacity>
          <View style={styles.cardLogin}>
            <TouchableOpacity
              style={styles.login}
              onPress={() => navigation.navigate("Logon")}
            >
              <Text style={styles.loginText}>
                Já possui cadastro?{" "}
                <Text style={styles.loginLinkText}>Login</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Register;
