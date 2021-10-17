import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    paddingTop: "8%",
  },
  avatar: {
    width: 80,
    height: 80,
    marginRight: "40%",
    borderRadius: 40,
  },
  leftContainer: {
    flexDirection: "row",
    width: "40%",
  },
  rightContainer: {
    width: "85%",
    top: "3%",
    left: "2%",
  },
  midContainer: {
    justifyContent: "space-between",
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  status: {
    fontSize: 16,
    color: "grey",
  },
  calllog: {
    flexDirection: "row",
    paddingTop: "5%",
  },
  call: {
    width: "5%",
  },
});

export default styles;
