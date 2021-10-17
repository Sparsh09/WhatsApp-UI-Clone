import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.tint,
    width: "15%",
    height: "9%",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: "5%",
    bottom: "5%",
  },
});
export default styles;
