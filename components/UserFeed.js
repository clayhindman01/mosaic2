import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Header from "./Header";
import UserFeedTile from "./UserFeedTile";
import NavBar from "./NavBar";

export default function UserFeed({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.userFeedContainer}>
        <Header></Header>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
            marginBottom: -35,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: "#1a1a1a",
            padding: 15,
          }}
          data={[{ key: "a" }, { key: "b" }, {}, {}, {}, {}, {}]}
          renderItem={({ item }) => {
            return <UserFeedTile navigation={navigation} />;
          }}
          keyExtractor={(item) => item.id}
        />
        <NavBar navigation={navigation} activeTab="home" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "red",
    flex: 1,
  },
  userFeedContainer: {
    flex: 1,
    backgroundColor: "#0a0a0a",
    justifyContent: "space-between",
  },
});
