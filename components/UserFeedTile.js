import React, { useState } from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import UserFeedTileBar from "./common/UserFeedTileBar";

export default function UserFeedTile({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.pictureContainer}>
        <Image
          source={require("../assets/placeholder.jpg")}
          style={styles.picture}
        />
        <UserFeedTileBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
    shadowOffset: { width: 1, height: 3 },
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 3,
  },
  profilePicture: {
    borderRadius: 100,
    height: 22,
    width: 22,
  },
  picture: {
    height: 500,
    maxWidth: "100%",
    borderRadius: 20,
  },
  icon: {
    opacity: 1,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 20,
    padding: "2.5%",
    marginTop: -75,
    zIndex: 2,
  },
  pictureContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  iconContainer: {
    backgroundColor: "snow",
    borderRadius: 100,
    padding: 10,
    opacity: 0.75,
    marginRight: 10,
  },
});
