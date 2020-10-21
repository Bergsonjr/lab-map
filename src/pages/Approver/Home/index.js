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
  ImageBackground,
} from "react-native";

import { Container, Option } from "../../../components/ScrollView/styles";

import profileImg from "../../../assets/henri-bergson.png";

import { getItem } from "../../../utils";
import { AuthContext } from "../../../components/Context";

import styles from "./styles";
function Home() {
  const navigation = useNavigation();
  const [user, setUser] = useState({});
  const { signOut } = React.useContext(AuthContext);

  (async function () {
    const data = await getItem("user");
    setUser(data);
  })();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.back} onPress={signOut}>
            <Image style={styles.userImage} source={profileImg}></Image>
            <Text style={styles.userName}>{user.username}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginTop: 35,
              flexWrap: "wrap",
            }}
          >
            <TouchableOpacity
              style={styles.cardCategory}
              onPress={() => {
                navigation.navigate("ApproverEquipments", { id_category: 1 });
              }}
            >
              <ImageBackground
                style={styles.cardPhoto}
                source={require("../../../assets/cameras.jpg")}
              ></ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cardCategory}
              onPress={() => {
                navigation.navigate("ApproverEquipments", { id_category: 2 });
              }}
            >
              <ImageBackground
                style={styles.cardPhoto}
                source={require("../../../assets/tripe.jpg")}
              ></ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cardCategory}
              onPress={() => {
                navigation.navigate("ApproverRequests", { id_category: 3 });
              }}
            >
              <ImageBackground
                style={styles.cardPhoto}
                source={require("../../../assets/solic.png")}
              ></ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cardCategory}
              onPress={() => {
                navigation.navigate("ApproverEquipments", { id_category: 4 });
              }}
            >
              <ImageBackground
                style={styles.cardPhoto}
                source={require("../../../assets/lentes.jpg")}
              ></ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Home;
