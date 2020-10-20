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

import api from "../../../service/api";

import Toast from "react-native-tiny-toast";
function Equipment() {
  const navigation = useNavigation();
  const route = useRoute();
  const [name, setName] = useState();
  const [id, setId] = useState();
  const [category, setCategory] = useState(route.params.category_id);
  const [description, setDescription] = useState();

  async function handleEquipment() {
    try {
      console.log(name, id, category, description);
      if (name && id && category && description) {
        const response = await api.post("equipment", {
          name,
          id,
          category,
          description,
        });

        console.log(response, "response in equipments");
        Toast.showSuccess("Cadastro efetuado");
        navigateBack();
      } else {
        Toast.show("Dados inválidos!", {
          position: Toast.position.center,
          containerStyle: {
            backgroundColor: "#f00",
            borderRadius: 15,
          },
          textStyle: {
            color: "#fff",
          },
          imgStyle: {},
          mask: false,
          maskStyle: {},
          duration: 2000,
          animation: true,
        });
      }
    } catch (error) {
      Toast.show("Algo de errado aconteceu", {
        position: Toast.position.center,
        containerStyle: {
          backgroundColor: "#f00",
          borderRadius: 15,
        },
        textStyle: {
          color: "#fff",
        },
        imgStyle: {},
        mask: false,
        maskStyle: {},
        duration: 2000,
        animation: true,
      });
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
            value={id}
            onChangeText={(value) => setId(value)}
            placeholder="Identificação"
            keyboardAppearance="dark"
            selectionColor="#FFF"
            placeholderTextColor="#CCC"
          />
          <TextInput
            style={styles.inputNotEditable}
            value={category}
            onChangeText={(value) => setCategory(value)}
            placeholder="Categoria"
            keyboardAppearance="dark"
            selectionColor="#FFF"
            keyboardType="numeric"
            placeholderTextColor="#CCC"
            editable={false}
          />
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={(value) => setDescription(value)}
            placeholder="Descrição"
            keyboardAppearance="dark"
            selectionColor="#FFF"
            keyboardType="numeric"
            placeholderTextColor="#CCC"
          />

          <TouchableOpacity style={styles.register} onPress={handleEquipment}>
            <Text style={styles.registerText}>Cadastrar equipamento</Text>
          </TouchableOpacity>
          <View style={styles.cardLogin}>
            <TouchableOpacity
              style={styles.login}
              onPress={() => navigation.navigate("Logon")}
            ></TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Equipment;
