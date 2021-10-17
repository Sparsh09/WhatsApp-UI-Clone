import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    padding: 10,
  },
  imageContainer : {
    marginRight:10,
    alignItems:  "center",
    paddingLeft : 20,
    marginLeft : 10
  },
  avatar: {
    width: 60,
    height: 60,
    paddingLeft: 2,
    borderRadius: 30,
    alignContent : "center",
  },
  rightContainer: {
    marginLeft:"20%",
    width:"80%",
    paddingTop:10
  },
  leftContainer: {
    alignItems: "center",
    flexDirection: "row",
    width:"20%"
  },
  midContainer: {
    justifyContent: "space-between",
    marginLeft : 40,
    marginTop:0
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  lastMessage: {
    fontSize: 16,
    color: "grey",
  },
  time: {
    fontSize: 12,
    color: "grey",
  },
});

export default styles;
