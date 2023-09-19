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
      {/* <View style={styles.topContainer}>
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
      </View> */}
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
            {!isLiked ? (
              <Icon name="hearto" size={28} color="black" style={styles.icon} />
            ) : (
              <Icon name="heart" size={28} color="red" style={styles.icon} />
            )}
          </Pressable>
          <Text style={{ fontSize: 18, marginRight: 8 }}>{likes}</Text>

          <Icon name="message1" size={25} color="black" style={styles.icon} />
          <Text style={{ fontSize: 18 }}>{numComments}</Text>
        </View>
        <Icon name="sharealt" size={25} color="black" style={styles.icon} />
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
    shadowOffset: { width: 1, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 3,
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
    borderRadius: 20,
  },
  icon: {
    opacity: 0.93,
    marginRight: 8,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "85%",
    backgroundColor: 'white',
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20, 
    borderRadius: 20, 
    padding: "2.5%",
    marginTop: -53,
    zIndex: 2,
    opacity: .5,

  },
  pictureContainer: {
    justifyContent: "center",
    alignItems: "center"
  }
});
