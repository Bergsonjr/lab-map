import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";

import profileImg from "../../../assets/henri-bergson.png";

import styles from "./styles";

import api from "../../../service/api";

import { getItem } from "../../../utils";
function Requests() {
  const navigation = useNavigation();
  const [requests, setRequests] = useState([]);

  function navigateBack() {
    navigation.goBack();
  }

  async function load() {
    try {
      const auth = await getItem("token");
      const response = await api.get("/lend", {
        headers: {
          "x-access-token": auth,
        },
      });

      setRequests(response.data);
    } catch (error) {
      console.log("error in load requests");
    }
  }

  function navigateToDetail(request) {
    navigation.navigate("Request", { request });
  }

  /*
  const requests = [
    {
      id: 1,
      code: "82900SA",
      equipment: "Sony Alpha a6400",
      requester: "Bergson Junior",
    },
    {
      id: 2,
      code: "8522CA",
      equipment: "Canon EOS 6D Mark II",
      requester: "Daniel Augusto",
    },
    {
      id: 3,
      code: "86209NK",
      equipment: "Nikon D750",
      requester: "Diego Almeida",
    },
  ];
  */

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
          <FlatList
            data={requests}
            style={styles.requestList}
            keyExtractor={(request) => String(request.id)}
            showsVerticalScrollIndicator={false}
            onEndReached={() => {}}
            onEndReachedThreshold={0.2}
            renderItem={({ item: request }) => (
              <View style={styles.request}>
                <View style={styles.requestImage}>
                  <Image
                    style={styles.requestPhoto}
                    source={profileImg}
                  ></Image>
                </View>
                <View style={styles.requestInfo}>
                  <Text style={styles.requestName}>{request.requester}</Text>
                  <Text style={styles.requestProperty}>
                    Equipamento:
                    <Text style={styles.requestValue}>{request.equipment}</Text>
                  </Text>
                  <Text style={styles.requestProperty}>
                    Código:
                    <Text style={styles.requestValue}>{request.code}</Text>
                  </Text>
                </View>

                <View style={styles.requestDetail}>
                  <TouchableOpacity
                    style={styles.detailsButton}
                    onPress={() => {
                      navigateToDetail(request);
                    }}
                  >
                    <Feather
                      name="chevron-right"
                      size={36}
                      color="#0A2739"
                    ></Feather>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Requests;
