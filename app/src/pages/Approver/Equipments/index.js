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

import { Checkbox } from "react-native-paper";
import profileImg from "../../../assets/henri-bergson.png";

import styles from "./styles";
function Equipment() {
  const navigation = useNavigation();
  const route = useRoute();
  // const equipment = route.params.equipment;
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const [days, setDays] = useState();
  const [puc_id, setPucId] = useState();
  const [description, setDescription] = useState();
  const [isAccording, setIsAccording] = useState(false);

  function handleLoan() {
    console.log(name, email, description, puc_id, days);
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
              <View style={styles.equipmentImage}>
                <Image
                  style={styles.equipmentPhoto}
                  source={profileImg}
                ></Image>
              </View>
              <View style={styles.equipmentInfo}>
                <Text style={styles.cardHeaderText}>{equipment.name}</Text>
                <Text style={styles.cardText}>
                  Status: {equipment.status ? "Disponível" : "Indisponível"}
                </Text>
                <Text style={styles.cardText}>Código: {equipment.id}</Text>
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
              />
              <Text style={styles.label}>Dias de empréstimo</Text>
              <TextInput
                style={styles.input}
                value={days}
                onChangeText={(value) => setDays(value)}
                keyboardAppearance="dark"
                selectionColor="#0A2739"
                placeholderTextColor="#0A2739"
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
              />
            </View>
            <View style={styles.cardFooter}>
              <View style={styles.checkboxContainer}>
                <Checkbox.Android
                  status={isAccording ? "checked" : "unchecked"}
                  onPress={() => setIsAccording(!isAccording)}
                  style={styles.checkbox}
                  color="#0A2739"
                />
                <Text style={styles.cardFooterText}>
                  Concordo com os termos de uso.
                </Text>
              </View>
              <TouchableOpacity
                style={styles.cardFooterButton}
                onPress={handleLoan}
              >
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

export default Equipment;
