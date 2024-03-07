import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import Header from "../common/Header";
import NavBar from "../common/NavBar";
import AccountHeader from "../common/AccountHeader";
import { getFirebaseUser, queryDBUser } from "../../api/api_utils";

export default function Account({ navigation, route }) {
  const [isFollowing, setIsFollowing] = useState(true);
  const [user, setUser] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (route.params.selfAccount) {
      const uid = getFirebaseUser().uid
      queryDBUser(setUser, setIsLoading)
    } else {
      setUser(route.params.user)
    }
  }, [])

  const handleFollowingClick = () => {
    setIsFollowing(!isFollowing);
  };

  if (!isLoading) return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0a0a0a",
      }}
    >
      <AccountHeader navigation={navigation} isBack={true} user={user} />

      <View style={styles.container}>
        <ScrollView>
          <View style={styles.accountPictureContainer}>
            <Image
              source={require("../../assets/testProfile.jpg")}
              style={styles.accountPicture}
            />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "60%",
              }}
            >
              <Pressable onPress={() => handleFollowingClick()}>
                <View
                  style={[
                    styles.followButton,
                    isFollowing ? styles.following : styles.notFollowing,
                  ]}
                >
                  <Text
                    style={isFollowing ? styles.following : styles.notFollowing}
                  >
                    {isFollowing ? "Follow" : "Unfollow"}
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
          <Text
            style={{
              color: "white",
              fontSize: 16,
              padding: 25,
              textAlign: "center",
            }}
          >
            {user.user_email}
          </Text>

          <View style={styles.friendsContainer}>
            <View style={styles.infoTile}>
              <Text style={styles.numberTextStyle}>7</Text>
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

          <View style={styles.tileContianer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={styles.tile}>
                <Image
                  source={require("../../assets/placeholder.jpg")}
                  style={styles.picture}
                />
              </View>

              <View style={styles.tile}>
                <Image
                  source={require("../../assets/placeholder.jpg")}
                  style={styles.picture}
                />
              </View>

              <View style={styles.tile}>
                <Image
                  source={require("../../assets/placeholder.jpg")}
                  style={styles.picture}
                />
              </View>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={styles.tile}>
                <Image
                  source={require("../../assets/placeholder.jpg")}
                  style={styles.picture}
                />
              </View>

              <View style={styles.tile}>
                <Image
                  source={require("../../assets/placeholder.jpg")}
                  style={styles.picture}
                />
              </View>

              <View style={styles.tile}>
                <Image
                  source={require("../../assets/placeholder.jpg")}
                  style={styles.picture}
                />
              </View>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={styles.tile}>
                <Image
                  source={require("../../assets/placeholder.jpg")}
                  style={styles.picture}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <NavBar navigation={navigation} activeTab="account" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2f2f2f",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: -35,
  },
  accountPictureContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 20,
  },
  accountPicture: {
    borderRadius: 100,
    height: 90,
    width: 90,
    borderColor: "lightgray",
    borderWidth: 1,
  },
  friendsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    paddingBottom: 25,
  },
  textStyle: {
    opacity: 0.93,
    fontSize: 16,
    color: "white",
  },
  numberTextStyle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  infoTile: {
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  atTextStyle: {
    padding: 20,
    fontSize: 16,
  },
  followButton: {
    padding: 15,
    alignItems: "center",
    width: 125,
    fontSize: 22,
    borderRadius: 50,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "lightgray",
    shadowOpacity: 0.2,
    elevation: 3,
  },
  notFollowing: {
    backgroundColor: "lightgray",
  },
  following: {
    backgroundColor: "#32ceca",
    color: "white",
  },
  tileContianer: {
    height: "100%",
    backgroundColor: "#737272",
    flexDirection: "column",
    paddingBottom: 35,
  },
  tile: {
    width: "33.3%",
    height: "100%",
    borderColor: "lightgray",
    borderWidth: 1,
  },
  picture: {
    width: 130,
    height: 200,
  },
});
