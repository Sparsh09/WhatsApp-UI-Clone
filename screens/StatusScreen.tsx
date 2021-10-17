import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet, FlatList, Image } from "react-native";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import color from "../constants/Colors";
export default function StatusScreen() {
  return (
    <View style={styles.container}>
      {/* <Text> Hello </Text> */}
      <View style={styles.profileContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://yt3.ggpht.com/ytc/AKedOLS1s_S70sbmHuDBc8IMQTu6151-zFI1BRBEJ4vN1Q=s900-c-k-c0x00ffffff-no-rj",
          }}
          // source={require("https://www.carlrippon.com/static/a46d80dfbb1799e5ef987f915544a75c/30d3a/carl.jpg")}
        />
        <FontAwesome5
          name="plus"
          size={25}
          color={"white"}
          style={styles.icon}
        />
        <View style={styles.text}>
          <Text style={styles.name}>My Status</Text>
          <Text style={styles.desc}>Tap to add status update</Text>
        </View>
        <View
          style={{
            flex : 1, 
            borderBottomColor: "black",
            borderBottomWidth: 1,
            bottom : "60%"
            // top : "0%"
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    flexDirection: "column",
    top: -100,
    left: "35%",
  },
  name: { fontWeight: "bold", fontSize: 16 },
  desc: { fontSize: 14, paddingTop: 12 },
  avatar: {
    height: 80,
    width: 80,
    paddingLeft: 0,
    borderRadius: 30,
    borderColor: "gray",
    borderWidth: 2,
  },
  icon: {
    top: -28,
    left: "18%",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 100,
    width: 30,
    backgroundColor: color.light.tint,
    paddingLeft: 4,
  },
  profileContainer: {
    width: "100%",
    height: "20%",
    top: -230,
    padding: "2%",
  },
});
