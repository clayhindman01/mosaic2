import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Text,
  Pressable,
} from "react-native";
import Header from "./Header";

export default function Account({ navigation }) {

  const [isFollowing, setIsFollowing] = useState(false)

  const handleFollowingClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header navigation={navigation} isBack={true} />
          <View style={styles.accountPictureContainer}>
            <Image
              source={require("../assets/testProfile.jpg")}
              style={styles.accountPicture}
            />
          </View>

          <View style={styles.accountPictureContainer}>
            <Text style={styles.atTextStyle}>@clayhindman01</Text>
          </View>

          <View style={styles.friendsContainer}>
            <View style={styles.infoTile}>
              <Text style={styles.numberTextStyle}>17</Text>
              <Text style={styles.textStyle}>Tiles Taken</Text>
            </View>
            <View style={styles.infoTile}>
              <Text style={styles.numberTextStyle}>292</Text>
              <Text style={styles.textStyle}>Followers</Text>
            </View>
            <View style={styles.infoTile}>
              <Text style={styles.numberTextStyle}>59</Text>
              <Text style={styles.textStyle}>Following</Text>
            </View>
          </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', padding: 20,}}>
          <Pressable onPress={() => handleFollowingClick()}>
            <View style={[styles.followButton, isFollowing? styles.following: styles.notFollowing]}>
              <Text style={isFollowing? styles.following: styles.notFollowing}>{isFollowing? "Follow": "Unfollow" }</Text>
            </View>
          </Pressable>
        </View>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '3%'
  },
  accountPictureContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },  
  accountPicture: {
    borderRadius: 100,
    height: 100,
    width: 100,
    
  },
  friendsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
  textStyle: {
    opacity: 0.93,
    fontSize: 16,
    color: "gray",
  },
  numberTextStyle: {
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 18,
  },
  infoTile: {
    width: "25%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  atTextStyle: {
    padding: 20,
    fontSize: 16,
  },
  followButton: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '35%',
    borderRadius: 50,
  },
  notFollowing: {
    backgroundColor: 'gray'
  },
  following: {
    backgroundColor: '#5bc789',
    color: 'white'
  }
});
