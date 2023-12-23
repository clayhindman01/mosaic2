import React, { useState } from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons";

export default function UserFeedTileBar() {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 100));
  return (
    <View style={styles.bottomContainer}>
      {/* Likes */}
      <Pressable
        onPress={() => {
          setIsLiked(!isLiked);
          setLikes(isLiked ? likes - 1 : likes + 1);
        }}
      >
        <View style={styles.iconContainer}>
          {!isLiked ? (
            <Icon name="hearto" size={30} color="white" style={styles.icon} />
          ) : (
            <Icon name="heart" size={30} color="red" style={styles.icon} />
          )}
        </View>
      </Pressable>

      {/* Comments */}
      <View style={styles.iconContainer}>
        <Feather
          name="message-square"
          size={30}
          color="white"
          style={styles.icon}
        />
      </View>
      <View style={styles.iconContainer}>
        <Feather name="send" size={30} color="white" style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    opacity: 1,
  },
  bottomContainer: {
    position: "relative",
    right: 60,
    width: 60,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#00b1b7",
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: "5%",
    paddingBottom: "5%",
    zIndex: 2,
  },
  pictureContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    borderRadius: 100,
    padding: 10,
    opacity: 0.75,
  },
});
