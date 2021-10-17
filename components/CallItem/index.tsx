import moment from "moment";
import React, { Component } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { User } from "../../types";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
export type ContactListRoomProps = {
  user: User;
};

const CallsItem = (props: ContactListRoomProps) => {
  const { user } = props;

  const onClick = () => {
    //navigate to chat room with user id
  };

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar} />
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.midContainer}>
            <Text style={styles.username}> {user.name} </Text>
            <View style={styles.calllog}>
              <MaterialCommunityIcons
                name="call-received"
                size={22}
                color={"green"}
              />
              <Text numberOfLines={2} style={styles.status}>
                30 minutes ago
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.call}>
          <MaterialCommunityIcons name="phone" size={22} color={"green"} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CallsItem;
