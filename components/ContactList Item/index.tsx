import moment from "moment";
import React, { Component } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { User } from "../../types";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export type ContactListRoomProps = {
  user: User;
};

const ContactListItem = (props: ContactListRoomProps) => {
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
            <Text numberOfLines={2} style={styles.status}>
              {user.status}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContactListItem;
