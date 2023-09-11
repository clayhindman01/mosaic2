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

export default function UserFeed({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header isBack={false} navigation={navigation} />
      <View style={styles.userFeedContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ width: "100%", height: "100%" }}
          data={[{ key: "a" }, { key: "b" }, {}, {}, {}, {}, {}]}
          renderItem={({ item }) => <UserFeedTile navigation={navigation} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "center",
  },
  userFeedContainer: {
    backgroundColor: "#1a1919",
    opacity: 0.97,
    width: "97%",
    marginRight: -10,
    height: Dimensions.get("window").height - 125,
    borderTopRightRadius: 30,
    padding: "3%",
    justifyContent: "center",
    alignItems: "center",
  },
});
