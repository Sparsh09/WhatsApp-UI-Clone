import moment from "moment";
import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Message } from "../../types";
import styles from "./styles";
export type ChatMessageProps = {
  message: Message;
};
// import ChatRooms from "../../data/ChatRoom";

const ChatMessage = (props: ChatMessageProps) => {
  const { message } = props;

  const isMyMessage = () => {
    return message.user.id == "u1";
  };
  // console.log("-------------");
  // console.log(
  //   ChatRooms.forEach((element) => {
  //     // if (element.id == message.user.id) {
  //     //   return element;
  //     // }
  //     console.log(element.id == message.user.id);
  //   })
  // );
  return (
    <View style={styles.container}>
      {/* <Image source={{ uri: message.user.imageUri }} /> */}
      <View
        style={[
          styles.messageBox,
          {
            backgroundColor: isMyMessage() ? "#DCF8CF" : "white",
            marginLeft: isMyMessage() ? 50 : 0,
            marginRight: isMyMessage() ? 0 : 50,
          },
        ]}
      >
        {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
        <Text style={styles.message}> {message.content} </Text>
        <Text style={styles.time}>
          {moment(message.createdAt).format("HH:MM")}
        </Text>
      </View>
    </View>
  );
};

export default ChatMessage;
