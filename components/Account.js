import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Text,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Header from "./Header";

export default function Account({ navigation }) {
  return (
    <SafeAreaView styles={styles.container}>
      <Header navigation={navigation} isBack={true} />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={styles.accountPictureContainer}>
          {/* TODO: get from user database */}
          <Image
            source={require("../assets/testProfile.jpg")}
            style={styles.accountPicture}
          />
        </View>

        <View style={styles.friendsContainer}>
          <View styles={styles.friendsNumber}>
            <Text style={styles.textStyle}>Friends</Text>
            <Text style={{ textAlign: "center" }}>292</Text>
          </View>
          <View>
            <Text style={styles.textStyle}>Tiles Taken</Text>
            <Text style={{ textAlign: "center" }}>17</Text>
          </View>
        </View>

        <View></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  accountPicture: {
    borderRadius: 100,
    height: 100,
    width: 100,
  },
  friendsContainer: {
    flexDirection: "row",
    width: "75%",
    justifyContent: "space-around",
    padding: 15,
  },
  textStyle: {
    opacity: 0.93,
    fontSize: 18,
  },
  friendsNumber: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
