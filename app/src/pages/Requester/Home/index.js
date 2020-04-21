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

import { Container, Option } from "../../../components/ScrollView/styles";

import profileImg from "../../../assets/henri-bergson.png";

import styles from "./styles";
function Home() {
  const navigation = useNavigation();
  const route = useRoute();
  const user = route.params.user;
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
            <Image style={styles.userImage} source={profileImg}></Image>
            <Text style={styles.userName}>{user.name}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(value) => setName(value)}
            placeholder="Pesquisar"
            keyboardAppearance="dark"
            selectionColor="#FFF"
            placeholderTextColor="#CCC"
          />

          <Container>
            <Option>
              <View style={styles.card}>
                <Text style={styles.cardText}>Câmeras</Text>
              </View>
            </Option>
            <Option>
              <View style={styles.card}>
                <Text style={styles.cardText}>Tripés</Text>
              </View>
            </Option>
            <Option>
              <View style={styles.card}>
                <Text style={styles.cardText}>Lenter</Text>
              </View>
            </Option>
            <Option>
              <View style={styles.card}>
                <Text style={styles.cardText}>Rebatedores</Text>
              </View>
            </Option>
          </Container>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Home;
