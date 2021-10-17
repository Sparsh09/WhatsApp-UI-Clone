import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    marginRight: "40%",
    borderRadius: 40,
  },
  leftContainer: {
    flexDirection: "row",
    width:"40%"
  },
  rightContainer:{
    width:"80%"
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
});

export default styles;
