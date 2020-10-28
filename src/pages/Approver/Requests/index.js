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

import Toast from "react-native-tiny-toast";
function Requests() {
  const navigation = useNavigation();
  const [requests, setRequests] = useState([]);

  function navigateBack() {
    navigation.goBack();
  }

  async function load() {
    try {
      const auth = await getItem("token");
      const { data } = await api("/lend", {
        headers: {
          "x-access-token": auth,
        },
      });

      setRequests(data.lends);

      if (!data.lends.length) {
        Toast.show("Nenhuma solicitação encontrada", {
          containerStyle: {
            backgroundColor: "#000",
            borderRadius: 8,
          },
          textStyle: {
            color: "#fff",
          },
          duration: 2000,
        });
      }
    } catch (error) {
      console.log("error in load requests");
    }
  }

  useEffect(() => {
    load();
  }, []);

  function navigateToDetail(request) {
    navigation.navigate("Request", { request });
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
                  <Text style={styles.requestName}>{request.username}</Text>
                  <Text style={styles.requestProperty}>
                    Equipamento:
                    <Text style={styles.requestValue}>{request.name}</Text>
                  </Text>
                  <Text style={styles.requestProperty}>
                    Código:
                    <Text style={styles.requestValue}>
                      {request.id_equipment}
                    </Text>
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
