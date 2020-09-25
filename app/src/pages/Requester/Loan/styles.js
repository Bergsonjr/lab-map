import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#0A2739",
    paddingTop: Constants.statusBarHeight + 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  userName: {
    marginLeft: 8,
    fontSize: 20,
    color: "#FFF",
  },
  body: {
    margin: 8,
  },
  back: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    flex: 1,
  },
  input: {
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    width: "100%",
    borderWidth: 0.5,
    borderRadius: 8,
    color: "#0A2739",
    textAlign: "left",
    borderColor: "#0A2739",
    backgroundColor: "#FFF",
  },
  card: {
    width: "100%",
    height: "97%",
    borderRadius: 8,
    backgroundColor: "#D7EEFC",
  },
  cardHeader: {
    padding: 16,
    height: "25%",
  },
  cardHeaderText: {
    color: "#0A2739",
    fontWeight: "bold",
    fontSize: 20,
  },
  cardBody: {
    padding: 16,
    height: "50%",
  },
  cardBodyText: {
    fontWeight: "bold",
  },
  cardFooter: {
    padding: 16,
    height: "25%",
  },
  cardFooterText: {
    color: "#0A2739",
    fontWeight: "bold",
  },
  cardFooterButton: {
    bottom: 0,
    width: "100%",
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0A2739",
  },
  cardFooterButtonText: {
    fontSize: 14,
    color: "#FFF",
    fontWeight: "bold",
  },
  checkbox: {
    alignSelf: "center",
  },
});
