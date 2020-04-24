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
function Register() {
  const navigation = useNavigation();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [puc_id, setPucId] = useState();
  const [password, setPassword] = useState();
  const [password_confirm, setPasswordConfirm] = useState();

  function handleRegister() {
    console.log(name, email, phone, puc_id, password, password_confirm);
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
            value={puc_id}
            onChangeText={(value) => setPucId(value)}
            placeholder="Matrícula"
            keyboardAppearance="dark"
            selectionColor="#FFF"
            keyboardType="numeric"
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
            <Text style={styles.registerText}>Registrar</Text>
          </TouchableOpacity>
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
    </TouchableWithoutFeedback>
  );
}

export default Register;
