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

import Toast from "react-native-tiny-toast";
function Request() {
  const navigation = useNavigation();
  const route = useRoute();

  const request = route.params.request;

  const [days, setDays] = useState({});
  const [puc_id, setPucId] = useState({});
  const [description, setDescription] = useState({});

  function load() {
    setDescription(request.description);
    setDays(`${request.days}`);
    setPucId(`${request.id}`);

    console.log(request, "request");
  }

  useEffect(() => {
    load();
  });

  function navigateBack() {
    navigation.goBack();
  }

  async function handleLoan(approved) {
    try {
      if (approved) {
        const auth = await getItem("token");
        const { data } = await api.put("/lend", {
          headers: {
            "x-access-token": auth,
          },
        });

        console.log(data, "data lend approved");
      } else {
        const auth = await getItem("token");
        const { data } = await api.delete(`/lend/${request.id}`, {
          headers: {
            "x-access-token": auth,
          },
        });

        console.log(data, "data lend reproved");

        Toast.show("Solicitação reprovada!", {
          containerStyle: {
            backgroundColor: "#006633",
            borderRadius: 8,
          },
          textStyle: {
            color: "#fff",
          },
          duration: 2000,
        });

        navigateBack();

        //notify User
      }
    } catch (error) {
      console.log(error, "error in handleLoan");
    }
  }

  async function finishLoan() {
    try {
    } catch (error) {
      console.log(error, "error in finishLoan");
    }
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
              <View style={styles.equipmentImage}>
                <Image
                  style={styles.equipmentPhoto}
                  source={profileImg}
                ></Image>
              </View>
              <View style={styles.equipmentInfo}>
                <Text style={styles.cardHeaderText}>{request.username}</Text>
                <Text style={styles.cardText}>Equipamento: {request.name}</Text>
                <Text style={styles.cardText}>
                  Código: {request.id_equipment}
                </Text>
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
            {request.status == "Pendente" ? (
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
            ) : (
              <View style={styles.cardFooter}>
                <TouchableOpacity
                  style={styles.cardFooterButtonApprove}
                  onPress={() => finishLoan()}
                >
                  <Text style={styles.cardFooterButtonText}>Finalizar</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Request;
