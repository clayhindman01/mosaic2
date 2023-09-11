import React, { useState } from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function UserFeedTile({ navigation }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 100));
  const [numComments, setNumComments] = useState(
    Math.floor(Math.random() * 100)
  );

  // const height = Image.resolveAssetSource("../assets/placeholder.jpg").height;
  // const width = Image.resolveAssetSource("../assets/placeholder.jpg").width;
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/testProfile.jpg")}
            style={styles.profilePicture}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 16 }}>clayhindman01</Text>
            <Text style={{ fontSize: 13 }}>8/31 8:32 PM</Text>
          </View>
        </View>

        <View style={{ width: 30, height: 30, backgroundColor: "#fed169" }} />
      </View>
      <View style={styles.pictureContainer}>
        <Pressable
          onPress={() => {
            navigation.navigate("mosaic");
          }}
        >
          <Image
            source={require("../assets/placeholder.jpg")}
            style={styles.picture}
          />
        </Pressable>
      </View>
      <View style={styles.bottomContainer}>
        <View style={{ flexDirection: "row" }}>
          <Pressable
            onPress={() => {
              setIsLiked(!isLiked);
              setLikes(isLiked ? likes - 1 : likes + 1);
            }}
          >
            {!isLiked ? (
              <Icon name="hearto" size={25} color="black" style={styles.icon} />
            ) : (
              <Icon name="heart" size={25} color="red" style={styles.icon} />
            )}
          </Pressable>
          <Text style={{ fontSize: 16, marginRight: 8 }}>{likes}</Text>

          <Icon name="message1" size={22} color="black" style={styles.icon} />
          <Text style={{ fontSize: 16 }}>{numComments}</Text>
        </View>
        <Icon name="sharealt" size={22} color="black" style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    backgroundColor: "#e7e6f0",
    opacity: 0.93,
    borderRadius: 20,
    paddingVertical: 5,
    marginBottom: 10,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 3,
    paddingHorizontal: "2.5%",
  },
  profilePicture: {
    borderRadius: 100,
    height: 50,
    width: 50,
  },
  picture: {
    height: 500,
    maxWidth: "100%",
  },
  pictureContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    // paddingHorizontal: "2.5%",
  },
  icon: {
    opacity: 0.93,
    marginRight: 8,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingTop: 5,
    paddingHorizontal: "2.5%",
  },
});
