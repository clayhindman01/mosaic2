import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TextInput,
} from "react-native";
import NavBar from "../NavBar";
import { searchUser } from "../../api/api_utils";

export default function Search({ navigation, route }) {
  const [search, setSearch] = useState("");
  const {searchResults, setSearchResults} = route.params;

  console.log(searchResults)

  const ExternalTextInputContainer = () =>{
    return(
      <TextInput
          style={styles.searchInput}
          onChangeText={text => setSearch(text)}
          value={search}
          placeholder="Search"
          placeholderTextColor='gray'
      />
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        {ExternalTextInputContainer()}
      </View>
      <View style={styles.searchResults}>
        <Text style={{ color: "gray", textAlign: "center", fontSize: 20 }}>
          {/* Mosaic is best enjoyed with others. Search for friends to see their
          tiles! */}
        {searchResults}  
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
