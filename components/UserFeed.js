import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Dimensions,
  Pressable,
  FlatList,
} from "react-native";
import Header from "./Header";
import UserFeedTile from "./UserFeedTile";
import NavBar from "./NavBar";

export default function UserFeed({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userFeedContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ width: "100%", height: "100%" }}
          data={[{ key: "a" }, { key: "b" }, {}, {}, {}, {}, {}]}
          renderItem={({ item }) => {
            if (item.key == "a") {
              return <Header navigation={navigation}></Header>;
            } else {
              return <UserFeedTile navigation={navigation} />;
            }
          }}
          keyExtractor={(item) => item.id}
        />
        <NavBar navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: '100%',
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "center",
  },
  userFeedContainer: {
    paddingHorizontal: "3%",
    height: Dimensions.get("screen").height,
  },
});
