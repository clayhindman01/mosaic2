import React, { useEffect, useState } from "react";
import { encode } from "base-64";
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
import { getFirebaseUser, getTilesForUser, queryDBUser } from "../../api/api_utils";
import { Buffer } from "buffer";

export default function Account({ navigation, route }) {
  const [isFollowing, setIsFollowing] = useState(true);
  const [user, setUser] = useState()
  const [tiles, setTiles] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const {selfAccount} = route.params

  useEffect(() => {
    console.log(route.params)
    if (selfAccount) {
      setIsLoading(true)
      const uid = getFirebaseUser().uid
      queryDBUser(uid, setUser, setIsLoading)
      getTilesForUser(uid, setTiles)
    } else {
      setUser(route.params.user)
      getTilesForUser(route.params.user.uid, setTiles)
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    console.log('reloading')
  }, [route])

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
              {!selfAccount? (
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
              ): null}
              
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
          </Text>

          <View style={styles.friendsContainer}>
            <View style={styles.infoTile}>
              <Text style={styles.numberTextStyle}>{tiles? tiles.length: null}</Text>
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
              {Object.keys(tiles).length != 0 ? tiles.map((tile) => {
                return (
                  <View style={styles.tile}>
                    <Image
                      // source={{ uri: encode(tile.tile_image.data) }}
                      source={{ uri: Buffer.from(tile.tile_image.data).toString('base64') }}
                      style={styles.picture}
                    />
                  </View>
                )
              }): console.log('null')}

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
