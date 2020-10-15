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
    marginBottom: 8,
    marginTop: 8,
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 25,
    resizeMode: "contain",
  },
  input: {
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    width: "100%",
    borderWidth: 0.5,
    borderRadius: 8,
    color: "#FFFFFF",
    textAlign: "center",
    borderColor: "#FFF",
    backgroundColor: "transparent",
  },
  sliderContainer: {
    flexDirection: "row",
  },
  card: {
    width: 125,
    height: 75,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D7EEFC",
  },
  cardText: {
    color: "#0A2739",
    fontWeight: "bold",
  },
  back: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  requestList: {
    margin: 8,
  },
  request: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: 100,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: "#D7EEFC",
  },
  requestName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  requestProperty: {
    fontSize: 14,
    fontWeight: "500",
  },
  requestValue: {
    fontSize: 14,
    fontWeight: "300",
  },
  detailsButton: {},
  requestImage: {
    alignContent: "flex-start",
    justifyContent: "center",
    marginLeft: 20,
    width: "20%",
  },
  requestInfo: {
    alignContent: "flex-start",
    justifyContent: "center",
    marginLeft: 10,
    width: "60%",
  },
  requestDetail: {
    alignContent: "flex-end",
    justifyContent: "center",
    width: "15%",
  },
  requestPhoto: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
});
