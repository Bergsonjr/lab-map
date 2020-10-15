import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    paddingHorizontal: 12,
    backgroundColor: "#0A2739",
    paddingTop: Constants.statusBarHeight + 20,
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 25,
    resizeMode: "contain",
  },
  input: {
    height: 50,
    margin: 8,
    padding: 10,
    width: "100%",
    borderWidth: 0.5,
    borderRadius: 8,
    color: "#FFFFFF",
    textAlign: "center",
    borderColor: "#FFF",
    backgroundColor: "transparent",
  },
  forgotPassword: {
    margin: 8,
  },
  forgotPasswordText: {
    color: "#FFFFFF",
  },
  login: {
    padding: 10,
    width: "100%",
    height: 50,
    marginTop: 8,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D7EEFC",
  },
  loginText: {
    color: "#0A2739",
    fontWeight: "bold",
  },
  register: {
    marginTop: 16,
    alignItems: "center",
  },
  registerText: {
    color: "#FFFFFF",
  },
  registerLinkText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
