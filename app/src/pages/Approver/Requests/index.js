import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";

import { Container, Option } from "../../../components/ScrollView/styles";

import profileImg from "../../../assets/henri-bergson.png";

import styles from "./styles";
function Requests() {
  const navigation = useNavigation();
  const route = useRoute();
  const [name, setName] = useState();

  function navigateBack() {
    navigation.goBack();
  }

  const requests = [
    {
      id: "82900SA",
      equipment: "Sony Alpha a6400",
      requester: "Bergson Junior",
    },
    {
      id: "8522CA",
      equipment: "Canon EOS 6D Mark II",
      requester: "Daniel Augusto",
    },
    {
      id: "86209NK",
      equipment: "Nikon D750",
      requester: "Diego Almeida",
    },
  ];

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
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
                    <Text style={styles.requestValue}>{request.request}</Text>
                  </Text>
                  <Text style={styles.requestProperty}>
                    Código:
                    <Text style={styles.requestValue}>{request.id}</Text>
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
