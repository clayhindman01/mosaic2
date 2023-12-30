import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Dimensions,
  Pressable,
  ScrollView,
  Platform,
  TextInput,
} from "react-native";
import Header from "./Header";
import NavBar from "./NavBar";

export default function Search({ navigation }) {
  const [search, setSearch] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          onChangeText={setSearch}
          value={search}
          placeholder="Search"
          placeholderTextColor="gray"
        ></TextInput>
      </View>
      <View style={styles.searchResults}>
        <Text style={{ color: "gray", textAlign: "center", fontSize: 20 }}>
          Mosaic is best enjoyed with others. Search for friends to see their
          tiles!
        </Text>
      </View>
      <NavBar navigation={navigation} activeTab="search" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 50 : 20,
    backgroundColor: "#0a0a0a",
  },
  searchResults: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  searchBar: {
    margin: 10,
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    color: "white",
    fontSize: 18,
    backgroundColor: "#1a1a1a",
  },
});
