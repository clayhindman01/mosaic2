import React, { useState } from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";

export default function UserFeedTile({ navigation }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 100));
  const [numComments, setNumComments] = useState(
    Math.floor(Math.random() * 100)
  );

  return (
    <View style={styles.container}>
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
        <View style={styles.bottomContainer}>
          <View style={{ flexDirection: "row" }}>
            <Pressable
              onPress={() => {
                setIsLiked(!isLiked);
                setLikes(isLiked ? likes - 1 : likes + 1);
              }}
            >
              <View style={styles.iconContainer}>
                {!isLiked ? (
                  <Icon
                    name="hearto"
                    size={25}
                    color="black"
                    style={styles.icon}
                  />
                ) : (
                  <Icon
                    name="heart"
                    size={25}
                    color="red"
                    style={styles.icon}
                  />
                )}
              </View>
            </Pressable>
            <View style={styles.iconContainer}>
              <Icon
                name="message1"
                size={25}
                color="black"
                style={styles.icon}
              />
            </View>
            <View style={styles.iconContainer}>
              <View
                style={{ width: 25, height: 25, backgroundColor: "orange" }}
              />
            </View>
            
          </View>
          <View style={[styles.iconContainer, { marginRight: 0 }]}>
            <Feather name="send" size={20} color="black" style={styles.icon} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
    paddingHorizontal: '3%',
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
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "snow",
    borderRadius: 100,
    padding: 10,
    opacity: 0.75,
    marginRight: 10,
  },
});
