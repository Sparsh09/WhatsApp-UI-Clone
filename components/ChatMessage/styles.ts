import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
  container: {
    padding: 6,
    top: "40%",
  },
  messageBox: {
    borderRadius: 10,
    padding: 10,
  },
  name: {
    color: Colors.light.tint,
    fontWeight: "bold",
    marginBottom: 3,
  },
  message: {},
  time: {
    alignSelf: "flex-end",
    color: "grey",
  },
});
export default styles;
