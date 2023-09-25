import React from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Image,
  Text,
  Platform,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function NavBar({ navigation }) {
  const handleAccountIconPress = () => {
    navigation.navigate("account");
  };

  const handleMosaicPress = () => {
    navigation.navigate("mosaic");
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbarContainer}>
        <Pressable>
          <View style={styles.iconTextContainer}>
            <AntDesign name="home" size={30} />
          </View>
        </Pressable>
        <Pressable onPress={() => handleMosaicPress()}>
          <View style={styles.iconTextContainer}>
            <AntDesign name="camerao" size={30} />
          </View>
        </Pressable>
        <Pressable onPress={() => handleAccountIconPress()}>
          <View style={styles.iconTextContainer}>
            <MaterialCommunityIcons name="account-outline" size={30} />
          </View>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  navbarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "85%",
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 100,
    padding: 10,
    marginTop: Platform.OS === "ios" ? -200 : -80,
    opacity: 0.9,
    shadowOffset: { width: 3, height: 3 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 1,
  },
  accountIcon: {
    opacity: 0.97,
  },
  accountIcon: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  iconTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: "7.5%",
    paddingHorizontal: "6%",
    borderRadius: 12,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 0.5,
  },
});
