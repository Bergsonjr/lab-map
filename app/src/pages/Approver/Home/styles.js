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
  FlatList,
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

  function navigateToDetail(equipment) {
    console.log(equipment);
    navigation.navigate("RequesterLoan", { equipment });
  }

  return <View></View>;
}

export default Home;
