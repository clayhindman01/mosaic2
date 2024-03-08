import React, { useState } from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons";

export default function UserFeedTileBar({ isLiked, setIsLiked }) {
  return (
    <View style={styles.bottomContainer}>
      <Pressable
        onPress={() => {
          setIsLiked(!isLiked);
        }}
      >
        <View style={styles.iconContainer}>
          {!isLiked ? (
            <Icon name="heart" size={30} color="white" style={styles.icon} />
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
        <Feather name="grid" size={30} color="white" style={styles.icon} />
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
    top: -315,
    width: 60,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
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
