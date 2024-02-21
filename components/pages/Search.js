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
import Header from "../common/Header";
import NavBar from "../common/NavBar";
import { searchUser } from "../../api/api_utils";

export default function Search({ navigation }) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(undefined);


  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      searchUser(search, setSearchResults)
    }, 150)
    return () => clearTimeout(delayDebounceFn)
  }, [search])

  useEffect(() => {
    console.log("seachResults", searchResults)
  }, [searchResults])

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          onChangeText={text => {
            setSearch(text)
          }}
          value={search}
          placeholder="Search"
          placeholderTextColor="gray"
        ></TextInput>
      </View>
      <View style={styles.searchResults}>
        
          {searchResults !== undefined? 
            searchResults.map((item) => (
              <View style={styles.noSearch}>
                <Text style={{ color: "gray", textAlign: "center", fontSize: 20 }}>{item.user_name}</Text>
              </View>
            )): (
              <Text style={{ color: "gray", textAlign: "center", fontSize: 20 }}>
                Mosaic is best enjoyed with others. Search for friends to see their
                tiles!
              </Text>
            )
          }
          {() => {
            for (item in searchResults) {
              console.log(item)
              return <Text>{item.user_name}</Text>
            }
          }}
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
  noSearch: {
    
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
