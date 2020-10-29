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
import { getItem } from "../../../utils";
import styles from "./styles";

import api from "../../../service/api";

import { AuthContext } from "../../../components/Context";

import Toast from "react-native-tiny-toast";

import NikonFM3 from "../../../assets/NikonFM3.jpg";
import NikonFM2 from "../../../assets/NikonFM2.jpg";
import NikonD90 from "../../../assets/NikonD90.jpg";
import NikonD5000 from "../../../assets/NikonD5000.jpg";
import LenteMicro60 from "../../../assets/LenteMicro60mm.jpg";
import Lente50 from "../../../assets/Lente50mm.jpg";
import Tripe from "../../../assets/Tripé.jpg";

function Home() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [user, setUser] = useState({});
  const [equipments, setEquipments] = useState({});
  const { signOut } = React.useContext(AuthContext);

  const imgs = {
    Tripé: Tripe,
    "Nikon FM3": NikonFM3,
    "Nikon FM2": NikonFM2,
    "Nikon D90": NikonD90,
    "Nikon D5000": NikonD5000,
    "Lente 50mm": LenteMicro60,
    "Lente micro 60mm": Lente50,
  };

  const load = async () => {
    const data = await getItem("user");
    setUser(data);
  };

  function navigateToDetail(equipment) {
    navigation.navigate("RequesterLoan", { equipment });
  }

  async function searchByCategory(id_category) {
    try {
      const auth = await getItem("token");
      const response = await api(`/equipment/${id_category}`, {
        headers: {
          "x-access-token": auth,
        },
      });

      setEquipments(response.data);
      if (!response.data.length)
        Toast.show("Nenhum equipamento encontrado", {
          containerStyle: {
            backgroundColor: "#000",
            borderRadius: 8,
          },
          textStyle: {
            color: "#fff",
          },
          duration: 2000,
        });
    } catch (error) {
      console.error("error in searchByCategory", error);
    }
  }

  /*
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
  */

  load();

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
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(value) => setName(value)}
            placeholder="Pesquisar"
            keyboardAppearance="dark"
            selectionColor="#FFF"
            placeholderTextColor="#CCC"
          />
          <View>
            <Container>
              <Option
                onPress={() => {
                  searchByCategory(1);
                }}
              >
                <View style={styles.card}>
                  <Text style={styles.cardText}>Câmeras</Text>
                </View>
              </Option>
              <Option
                onPress={() => {
                  searchByCategory(2);
                }}
              >
                <View style={styles.card}>
                  <Text style={styles.cardText}>Tripés</Text>
                </View>
              </Option>
              <Option
                onPress={() => {
                  searchByCategory(3);
                }}
              >
                <View style={styles.card}>
                  <Text style={styles.cardText}>Lentes</Text>
                </View>
              </Option>
              <Option
                onPress={() => {
                  searchByCategory(4);
                }}
              >
                <View style={styles.card}>
                  <Text style={styles.cardText}>Flash</Text>
                </View>
              </Option>
            </Container>
          </View>

          {equipments ? (
            <View style={{ marginTop: 5 }}>
              <FlatList
                data={equipments}
                style={styles.equipmentList}
                keyExtractor={(equipment) => String(equipment.id)}
                showsVerticalScrollIndicator={false}
                initialNumToRender={equipments.length}
                onEndReached={() => {}}
                onEndReachedThreshold={0.2}
                renderItem={({ item: equipment }) => (
                  <View style={styles.equipment}>
                    <View style={styles.equipmentImage}>
                      <Image
                        style={styles.equipmentPhoto}
                        source={imgs[`${equipment.name}`]}
                      ></Image>
                    </View>
                    <View style={styles.equipmentInfo}>
                      <Text style={styles.equipmentName}>{equipment.name}</Text>
                      <Text style={styles.equipmentProperty}>
                        Código:
                        <Text style={styles.equipmentValue}>
                          {" "}
                          {equipment.id}
                        </Text>
                      </Text>
                      <Text style={styles.equipmentProperty}>
                        Status:
                        <Text style={styles.equipmentValue}>
                          {" "}
                          {Boolean(equipment.id_status)
                            ? "Disponível"
                            : "Indisponível"}
                        </Text>
                      </Text>
                    </View>

                    <View
                      style={styles.equipmentDetail}
                      opacity={Boolean(equipment.id_status) ? 1 : 0.5}
                    >
                      <TouchableOpacity
                        style={styles.detailsButton}
                        disabled={!Boolean(equipment.id_status)}
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
          ) : (
            <View>
              <Text style={styles.equipmentName}>
                Nenhum equipamento encontrado
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Home;
