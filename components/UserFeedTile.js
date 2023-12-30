import React, { useContext, useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import UserFeedTileBar from "./common/UserFeedTileBar";
import { PictureContext } from "../api/context";

export default function UserFeedTile({ navigation }) {
  const picture = useContext(PictureContext);
  const [isLiked, setIsLiked] = useState(false);

  console.log("picture", picture);

  let lastPress = 0;
  const onDoublePress = () => {
    const time = new Date().getTime();
    const delta = time - lastPress;

    const DOUBLE_PRESS_DELAY = 400;
    if (delta < DOUBLE_PRESS_DELAY) {
      // Success double press
      setIsLiked(true);
    }
    lastPress = time;
  };

  return (
    <View style={styles.container}>
      <View
        style={styles.pictureContainer}
        onStartShouldSetResponder={(evt) => onDoublePress()}
      >
        <View style={styles.accountPictureContainer}>
          <Image
            source={require("../assets/testProfile.jpg")}
            style={styles.accountPicture}
          />
        </View>

        <Image
          source={require("../assets/placeholder.jpg")}
          style={styles.picture}
        />
        <UserFeedTileBar isLiked={isLiked} setIsLiked={setIsLiked} />
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
  accountPictureContainer: {
    height: "100%",
    marginLeft: 10,
    marginTop: 15,
    zIndex: 2,
  },
  accountPicture: {
    borderRadius: 100,
    height: 60,
    width: 60,
    borderColor: "lightgray",
    borderWidth: 1,
  },
  picture: {
    height: 500,
    maxWidth: "100%",
    borderRadius: 20,
    marginLeft: -70,
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
