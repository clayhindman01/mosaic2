import React, { useState } from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function UserFeedTile() {
  const [isLiked, setIsLiked] = useState(false);

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
        <Image
          source={require("../assets/placeholder.jpg")}
          style={styles.picture}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={{ flexDirection: "row" }}>
          <Pressable onPress={() => setIsLiked(!isLiked)}>
            {!isLiked ? (
              <Icon name="hearto" size={25} color="black" style={styles.icon} />
            ) : (
              <Icon name="heart" size={25} color="red" style={styles.icon} />
            )}
          </Pressable>

          <Icon name="message1" size={22} color="black" style={styles.icon} />
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
    height: 300,
    maxWidth: "100%",
  },
  pictureContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
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
    padding: 3,
    paddingHorizontal: "2.5%",
  },
});
