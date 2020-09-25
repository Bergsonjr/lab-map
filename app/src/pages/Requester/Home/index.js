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

  const equipments = [
    {
      id: "82900SA",
      name: "Sony Alpha a6400",
      status: 1,
    },
    {
      id: "8522CA",
      name: "Canon EOS 6D Mark II",
      status: 0,
    },
    {
      id: "86209NK",
      name: "Nikon D750",
      status: 1,
    },
  ];

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.back} onPress={navigateBack}>
            <Image style={styles.userImage} source={profileImg}></Image>
            <Text style={styles.userName}>{user.name}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(value) => setName(value)}
            placeholder="Pesquisar"
            keyboardAppearance="dark"
            selectionColor="#FFF"
            placeholderTextColor="#CCC"
          />

          <Container>
            <Option>
              <View style={styles.card}>
                <Text style={styles.cardText}>Câmeras</Text>
              </View>
            </Option>
            <Option>
              <View style={styles.card}>
                <Text style={styles.cardText}>Tripés</Text>
              </View>
            </Option>
            <Option>
              <View style={styles.card}>
                <Text style={styles.cardText}>Lentes</Text>
              </View>
            </Option>
            <Option>
              <View style={styles.card}>
                <Text style={styles.cardText}>Rebatedores</Text>
              </View>
            </Option>
          </Container>

          <FlatList
            data={equipments}
            style={styles.equipmentList}
            keyExtractor={(equipment) => String(equipment.id)}
            showsVerticalScrollIndicator={false}
            onEndReached={() => {}}
            onEndReachedThreshold={0.2}
            renderItem={({ item: equipment }) => (
              <View style={styles.equipment}>
                <View style={styles.equipmentImage}>
                  <Image
                    style={styles.equipmentPhoto}
                    source={profileImg}
                  ></Image>
                </View>
                <View style={styles.equipmentInfo}>
                  <Text style={styles.equipmentName}>{equipment.name}</Text>
                  <Text style={styles.equipmentProperty}>
                    Código:
                    <Text style={styles.equipmentValue}> {equipment.id}</Text>
                  </Text>
                  <Text style={styles.equipmentProperty}>
                    Status:
                    <Text style={styles.equipmentValue}>
                      {equipment.status ? "Disponível" : "Indisponível"}
                    </Text>
                  </Text>
                </View>

                <View
                  style={styles.equipmentDetail}
                  opacity={equipment.status ? 1 : 0.5}
                >
                  <TouchableOpacity
                    style={styles.detailsButton}
                    disabled={!equipment.status}
                    onPress={() => {
                      navigateToDetail(equipment);
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

export default Home;
