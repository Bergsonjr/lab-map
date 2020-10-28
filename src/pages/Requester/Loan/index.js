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
import { getItem } from "../../../utils";
import api from "../../../service/api";

import Toast from "react-native-tiny-toast";

import NikonFM3 from "../../../assets/NikonFM3.jpg";
import NikonFM2 from "../../../assets/NikonFM2.jpg";
import NikonD90 from "../../../assets/NikonD90.jpg";
import NikonD5000 from "../../../assets/NikonD5000.jpg";
import LenteMicro60 from "../../../assets/LenteMicro60mm.jpg";
import Lente50 from "../../../assets/Lente50mm.jpg";
import Tripe from "../../../assets/Tripé.jpg";

function Lend() {
  const navigation = useNavigation();
  const route = useRoute();
  const equipment = route.params.equipment;

  const imgs = {
    Tripé: Tripe,
    "Nikon FM3": NikonFM3,
    "Nikon FM2": NikonFM2,
    "Nikon D90": NikonD90,
    "Nikon D5000": NikonD5000,
    "Lente 50mm": LenteMicro60,
    "Lente micro 60mm": Lente50,
  };

  const [days, setDays] = useState();
  const [puc_id, setPucId] = useState();
  const [description, setDescription] = useState();
  const [isAccording, setIsAccording] = useState(false);

  async function handleLoan() {
    try {
      if (days && puc_id && description) {
        const requester = await getItem("user");

        const lend = {
          id_equipment: equipment.id,
          id_requester: requester.id,
          description,
          days: Number(days),
        };

        const auth = await getItem("token");
        const data = await api("/lend", {
          headers: {
            "x-access-token": auth,
          },
          data: lend,
          method: "post",
        });

        console.log(data, "data");
        Toast.show("Solicitação feita!", {
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
      } else {
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
    } catch (error) {
      Toast.show("Algo de errado aconteceu!", {
        containerStyle: {
          backgroundColor: "#f00",
          borderRadius: 8,
        },
        textStyle: {
          color: "#fff",
        },
        duration: 2000,
      });
      console.log(error, "error in lend");
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
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.equipmentImage}>
                <Image
                  style={styles.equipmentPhoto}
                  source={imgs[`${equipment.name}`]}
                ></Image>
              </View>
              <View style={styles.equipmentInfo}>
                <Text style={styles.cardHeaderText}>{equipment.name}</Text>
                <Text style={styles.cardText}>
                  Status:{" "}
                  {Boolean(equipment.id_status) ? "Disponível" : "Indisponível"}
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

export default Lend;
