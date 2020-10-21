import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { AuthContext } from "../../components/Context";

import styles from "./styles";

import logoImg from "../../assets/logo.png";

import api from "../../service/api";

import Toast from "react-native-tiny-toast";

function Logon() {
  const navigation = useNavigation();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = React.useContext(AuthContext);

  const handleLogin = async (login, password) => {
    try {
      const { data } = await api.post("session", {
        login,
        password,
      });

      const { user, auth, token } = data;

      signIn({ user, auth, token });
    } catch (error) {
      Toast.show("Dados inválidos!", {
        containerStyle: {
          backgroundColor: "#f00",
          borderRadius: 8,
        },
        textStyle: {
          color: "#fff",
        },
        duration: 2000,
      });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Image style={styles.logo} source={logoImg} alt="Lab. logo"></Image>

        <TextInput
          style={styles.input}
          value={login}
          onChangeText={(value) => setLogin(value)}
          placeholder="Login"
          keyboardAppearance="dark"
          selectionColor="#FFF"
          placeholderTextColor="#FFF"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(value) => setPassword(value)}
          secureTextEntry
          placeholder="Senha"
          keyboardAppearance="dark"
          selectionColor="#FFF"
          placeholderTextColor="#FFF"
        />

        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={() => navigation.navigate("Recover")}
        >
          <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.login}
          onPress={() => handleLogin(login, password)}
        >
          <Text style={styles.loginText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.register}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.registerText}>
            Não possui cadastro?{" "}
            <Text style={styles.registerLinkText}>Cadastrar</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Logon;
