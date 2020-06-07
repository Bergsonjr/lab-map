import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 12,
    backgroundColor: "#0A2739",
    paddingTop: Constants.statusBarHeight + 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  body: {
    marginBottom: 8,
    marginTop: 8,
  },
  input: {
    height: 50,
    marginTop: 8,
    marginBottom: 8,
    padding: 10,
    width: "100%",
    borderWidth: 0.5,
    borderRadius: 8,
    color: "#FFFFFF",
    textAlign: "center",
    borderColor: "#FFF",
    backgroundColor: "transparent",
  },
  register: {
    width: "100%",
    height: 50,
    marginTop: 8,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D7EEFC",
  },
  registerText: {
    color: "#0A2739",
    fontWeight: "bold",
  },
  login: {
    marginTop: 16,
    alignItems: "center",
  },
  loginText: {
    color: "#FFFFFF",
  },
  loginLinkText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  back: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
