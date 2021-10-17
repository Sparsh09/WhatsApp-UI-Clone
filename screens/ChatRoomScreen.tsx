import React, { Component } from "react";

import { useRoute } from "@react-navigation/native";
import { FlatList, ImageBackground } from "react-native";
import chatRoomData from "../data/Chat";
import ChatMessage from "../components/ChatMessage";
import BG from "../assets/images/bg2.jpg";
import InputBox from "../components/InputBox";
const ChatRoomScreen = () => {
  const route = useRoute();
  // console.log(route.params);

  return (
    <ImageBackground
      style={{ width: "100%", height: "100%", flex: 1 }}
      source={BG}
    >
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
        inverted
        style={{ width: "100%" }}
      />
      <InputBox />
    </ImageBackground>
  );
};

export default ChatRoomScreen;
