import {
  Entypo,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React, { Component, useState } from "react";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
// import styles from "../ChatList Items/styles";
import { Text, View } from "../Themed";
import styles from "./styles";
const InputBox = () => {
  const [message, setMessage] = useState("");

  const onMicrophonePress = () => {
    console.log("Micropphone Pressed");
  };
  const onSendPress = () => {
    console.warn(`Sending message ${message}`);

    //send message to backend

    setMessage("");
  };
  const onPress = () => {
    if (!message) {
      onMicrophonePress();
    } else {
      onSendPress();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" color="grey" size={25} />
        <TextInput
          style={styles.textInput}
          multiline
          value={message}
          onChangeText={setMessage}
          placeholder={"Type a Message"}
        />
        <Entypo name="attachment" size={25} color="grey" style={styles.icon} />
        {!message && (
          <Fontisto name="camera" size={25} color="grey" style={styles.icon} />
        )}
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          {!message ? (
            <MaterialCommunityIcons
              name="microphone"
              color={"white"}
              size={25}
            />
          ) : (
            <MaterialCommunityIcons name="send" size={25} color={"white"} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default InputBox;
