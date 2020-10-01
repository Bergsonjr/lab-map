import React, { useEffect } from "react";

import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Logon from "./pages/Logon";
import Recover from "./pages/Recover";
import Register from "./pages/Register";

import RequesterHome from "./pages/Requester/Home";
import RequesterLoan from "./pages/Requester/Loan";

import ApproverHome from "./pages/Approver/Home";
import ApproverRequests from "./pages/Approver/Requests";
import ApproverEquipments from "./pages/Approver/Equipments";

import { AuthContext } from "../src/components/Context";

import AsyncStorage from "@react-native-community/async-storage";

import api from "./service/api";

const AppStack = createStackNavigator();
const RootStack = createStackNavigator();
const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator screenOptions={{ headerShown: false }}>
    <RootStack.Screen name="Logon" component={Logon}></RootStack.Screen>
    <RootStack.Screen name="Recover" component={Recover}></RootStack.Screen>
    <RootStack.Screen name="Register" component={Register}></RootStack.Screen>
  </RootStack.Navigator>
);

function Routes() {
  const initialLoginState = {
    isLoading: true,
    login: null,
    token: null,
    admin: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          token: action.token,
          admin: action.admin,
          user: action.user,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          login: action.id,
          token: action.token,
          admin: action.admin,
          user: action.user,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          login: null,
          token: null,
          admin: null,
          user: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          login: action.id,
          token: action.token,
          admin: null,
          user: null,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (login, password) => {
        try {
          console.log(login, password);

          const { data } = await api.post("session", {
            login,
            password,
          });

          console.log(data, "user fetch");
          if (data.auth) {
            // Se as validações estiverem ok
            await AsyncStorage.setItem("token", data.token);
            await AsyncStorage.setItem("user", JSON.stringify(...data.user));

            dispatch({
              type: "LOGIN",
              id: data.user.name,
              token: data.token,
              admin: data.user.admin,
              user: data.user,
            });
          }
        } catch (error) {
          console.log(error, "error in session");
        }
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem("user");
          await AsyncStorage.removeItem("token");
          dispatch({ type: "LOGOUT" });
        } catch (error) {
          console.log(error, "error in signOut");
        }
      },
      signUp: () => {},
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      try {
        console.log(loginState, "loginState");
        // await AsyncStorage.removeItem("user");
        const user = await AsyncStorage.getItem("user");
        const token = await AsyncStorage.getItem("token");

        if (user) console.log(JSON.parse(user), "user");
        console.log(token, "token");
        dispatch({
          type: "RETRIEVE_TOKEN",
          token,
          user,
        });
      } catch (error) {
        console.log(error, "error in useEffect retrieve");
      }
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.token && loginState.user ? (
          !loginState.admin ? (
            <AppStack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName="RequesterHome"
            >
              <AppStack.Screen
                name="RequesterLoan"
                component={RequesterLoan}
              ></AppStack.Screen>
              <AppStack.Screen
                name="RequesterHome"
                component={RequesterHome}
              ></AppStack.Screen>
            </AppStack.Navigator>
          ) : (
            <AppStack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName="ApproverHome"
            >
              <AppStack.Screen
                name="ApproverHome"
                component={ApproverHome}
              ></AppStack.Screen>
              <AppStack.Screen
                name="ApproverRequests"
                component={ApproverRequests}
              ></AppStack.Screen>
              <AppStack.Screen
                name="ApproverEquipments"
                component={ApproverEquipments}
              ></AppStack.Screen>
            </AppStack.Navigator>
          )
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default Routes;
