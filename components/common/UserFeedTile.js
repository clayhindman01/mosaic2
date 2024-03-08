import React, { useContext, useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import UserFeedTileBar from "./UserFeedTileBar";
import { PictureContext } from "../../api/context";

export default function UserFeedTile({ navigation }) {
  const picture = useContext(PictureContext);
  const [isLiked, setIsLiked] = useState(false);
  
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

      <View style={styles.accountPictureContainer}>
        <Image
          source={require("../../assets/testProfile.jpg")}
          style={styles.accountPicture}
        />
        <View>
          <Text style={{ color: 'white' }}>Username</Text>
          <Text style={{ color: 'white' }}>Date</Text>
        </View>
        
      </View>

      <View
        style={styles.pictureContainer}
        onStartShouldSetResponder={(evt) => onDoublePress()}
      >

        <Image
          source={require("../../assets/placeholder.jpg")}
          style={styles.picture}
        />
        <UserFeedTileBar isLiked={isLiked} setIsLiked={setIsLiked} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: -130,
  },
  accountPictureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 2,
  },
  accountPicture: {
    borderRadius: 100,
    height: 50,
    width: 50,
    margin: 10,
    marginLeft: 0,
  },
  picture: {
    height: 500,
    maxWidth: "100%",
    borderRadius: 20,
  },
  pictureContainer: {
    alignItems: "flex-end",
    justifyContent:'center'
  },
});
