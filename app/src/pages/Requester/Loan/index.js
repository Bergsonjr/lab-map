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
  CheckBox,
} from "react-native";

import profileImg from "../../../assets/henri-bergson.png";

import styles from "./styles";
function Home() {
  const navigation = useNavigation();
  const route = useRoute();
  const equipment = route.params.equipment;
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [puc_id, setPucId] = useState();
  const [password, setPassword] = useState();
  const [isAccording, setIsAccording] = useState(false);

  function handleLoan() {
    console.log(name, email, phone, puc_id, password);
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
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardText}>{equipment.name}</Text>
              <Text style={styles.cardText}>Status: {equipment.status}</Text>
              <Text style={styles.cardText}>Código: {equipment.id}</Text>
            </View>
            <View style={styles.cardBody}></View>
            <View style={styles.cardFooter}>
              <CheckBox
                value={isAccording}
                onValueChange={setIsAccording}
                styles={styles.checkbox}
              >
                <Text style={styles.cardFooterText}>
                  Concordo com os termos de uso.
                </Text>
              </CheckBox>
              <TouchableOpacity style={styles.cardFooterButton}>
                <Text style={styles.cardFooterButtonText}>
                  Solicitar empréstimo
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Home;
