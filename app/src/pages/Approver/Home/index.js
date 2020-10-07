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
function Home() {
  const navigation = useNavigation();
  const route = useRoute();
  const [name, setName] = useState();

  const user = {
    name: "Bergson Jr.",
    email: "bergsonjr@icloud.com",
  };

  function navigateBack() {
    navigation.goBack();
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => {
              navigateBack();
            }}
          >
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

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginTop: 50,
              flexWrap: "wrap",
            }}
          >
            <View style={styles.cardCategory}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ApproverEquipments");
                }}
              >
                <Text style={styles.cardText}>Câmeras</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardCategory}>
              <TouchableOpacity>
                <Text style={styles.cardText}>Tripés</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardCategory}>
              <TouchableOpacity>
                <Text style={styles.cardText}>Lentes</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardCategory}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ApproverRequests");
                }}
              >
                <Text style={styles.cardText}>Solicitações</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Home;
