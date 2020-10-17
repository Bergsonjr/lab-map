import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";

import profileImg from "../../../assets/henri-bergson.png";

import styles from "./styles";

import api from "../../../service/api";

import { getItem } from "../../../utils";
function Request() {
  const navigation = useNavigation();
  const route = useRoute();

  const request = route.params.request;

  const [days, setDays] = useState();
  const [puc_id, setPucId] = useState();
  const [description, setDescription] = useState();

  async function load() {
    try {
      console.log(request);
      setDescription(request.equipment);
      setDays(request.days);
      setPucId(request.id);
      const auth = await getItem("token");
      const loan = await api({
        method: "get",
        url: `lend/${request.code}`,
        headers: {
          "x-access-token": auth,
        },
      });

      console.log(loan, "loan request");
    } catch (error) {}
  }

  console.log(request);
  function navigateBack() {
    navigation.goBack();
  }

  async function handleLoan(approved) {
    if (approved) {
    } else {
    }
  }

  load();

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
              <View style={styles.equipmentImage}>
                <Image
                  style={styles.equipmentPhoto}
                  source={profileImg}
                ></Image>
              </View>
              <View style={styles.equipmentInfo}>
                <Text style={styles.cardHeaderText}>{request.equipment}</Text>
                <Text style={styles.cardText}>
                  Status: {request.status ? "Disponível" : "Indisponível"}
                </Text>
                <Text style={styles.cardText}>Código: {request.code}</Text>
              </View>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.label}>Matrícula</Text>
              <TextInput
                style={styles.input}
                value={puc_id}
                onChangeText={(value) => setPucId(value)}
                keyboardAppearance="dark"
                selectionColor="#0A2739"
                placeholderTextColor="#0A2739"
                editable={false}
              />
              <Text style={styles.label}>Dias de empréstimo</Text>
              <TextInput
                style={styles.input}
                value={days}
                onChangeText={(value) => setDays(value)}
                keyboardAppearance="dark"
                selectionColor="#0A2739"
                placeholderTextColor="#0A2739"
                editable={false}
              />
              <Text style={styles.label}>Descrição</Text>
              <TextInput
                style={styles.textArea}
                value={description}
                multiline={true}
                numberOfLines={10}
                onChangeText={(value) => setDescription(value)}
                keyboardAppearance="dark"
                selectionColor="#0A2739"
                placeholderTextColor="#0A2739"
                editable={false}
              />
            </View>
            <View style={styles.cardFooter}>
              <TouchableOpacity
                style={styles.cardFooterButtonApprove}
                onPress={() => handleLoan(true)}
              >
                <Text style={styles.cardFooterButtonText}>Aprovar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cardFooterButtonReprove}
                onPress={() => handleLoan(false)}
              >
                <Text style={styles.cardFooterButtonText}>Reprovar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Request;
