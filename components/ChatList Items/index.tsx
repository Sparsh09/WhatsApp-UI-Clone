import moment from "moment";
import React, { Component } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export type ChatListRoomProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListRoomProps) => {
  const { chatRoom } = props;
  const user = chatRoom.users[1];
  const navigation = useNavigation();

  const onClick = () => {
    navigation.navigate("ChatRoom", { id: chatRoom.id, name: user.name , image : user.imageUri });
  };

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <View style= {styles.imageContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar} />
          </View>
          </View>
          <View style={styles.rightContainer}>
          <View style={styles.midContainer}>
            <Text style={styles.username}> {user.name} </Text>
            <Text style={styles.lastMessage} numberOfLines={1}>
              {chatRoom.lastMessage.content}
            </Text>
          </View>
        </View>

        <Text style={styles.time}>
          {moment(chatRoom.lastMessage.createdAt).format("YYYY/DD/MM ")}{" "}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;
