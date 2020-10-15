import React, { useEffect } from "react";

import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Logon from "./src/pages/Logon";
import Recover from "./src/pages/Recover";
import Register from "./src/pages/Register";

import RequesterHome from "./src/pages/Requester/Home";
import RequesterLoan from "./src/pages/Requester/Loan";

import Request from "./src/pages/Approver/Request";
import ApproverHome from "./src/pages/Approver/Home";
import ApproverRequests from "./src/pages/Approver/Requests";
import ApproverEquipments from "./src/pages/Approver/Equipments";

import { AuthContext } from "./src/components/Context";

import { setItem, getItem, removeItem } from "./src/utils";

const AppStack = createStackNavigator();
const RootStack = createStackNavigator();
const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator screenOptions={{ headerShown: false }}>
    <RootStack.Screen name="Logon" component={Logon}></RootStack.Screen>
    <RootStack.Screen name="Recover" component={Recover}></RootStack.Screen>
    <RootStack.Screen name="Register" component={Register}></RootStack.Screen>
  </RootStack.Navigator>
);

export default function App() {
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
      signIn: async ({ user, auth, token }) => {
        try {
          console.log(user, "user");
          if (auth) {
            await Promise.all([setItem("token", token), setItem("user", user)]);
          }
        } catch (error) {
          console.log(error, "error in signIn");
        }
        dispatch({
          type: "LOGIN",
          id: user.id,
          token,
          admin: user.admin,
          user,
        });
      },
      signOut: async () => {
        try {
          await removeItem("user");
          await removeItem("admin");
          await removeItem("token");
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
        console.log(await getItem("user"), "user storage");

        /*
        await removeItem("user");
        await removeItem("admin");
        await removeItem("token");
*/
        const [user, token] = await Promise.all([
          getItem("user"),
          getItem("token"),
        ]);

        console.log(token, "token");
        dispatch({
          type: "RETRIEVE_TOKEN",
          token,
          user,
          admin: user.admin,
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
              <AppStack.Screen
                name="Request"
                component={Request}
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
