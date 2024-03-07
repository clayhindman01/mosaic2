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
import Feather from "react-native-vector-icons/Feather";

export default function NavBar({ navigation, activeTab }) {
  const navigateToTab = (tab, params) => {
    navigation.navigate(tab, params);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbarContainer}>
        <Pressable onPress={() => navigateToTab("home")}>
          <View style={[styles.iconTextContainer]}>
            <AntDesign
              name="home"
              size={35}
              style={
                activeTab === "home" ? styles.activeIcon : styles.inactiveIcon
              }
            />
          </View>
        </Pressable>

        <Pressable onPress={() => navigateToTab("search")}>
          <View style={[styles.iconTextContainer]}>
            <AntDesign
              name="search1"
              size={35}
              style={
                activeTab === "search" ? styles.activeIcon : styles.inactiveIcon
              }
            />
          </View>
        </Pressable>

        <Pressable onPress={() => navigateToTab("camera")}>
          <View
            style={[styles.iconTextContainer, styles.iconTextContainerCamera]}
          >
            <AntDesign
              name="camerao"
              size={35}
              style={
                activeTab === "mosaic" ? styles.activeIcon : styles.inactiveIcon
              }
            />
          </View>
        </Pressable>

        <Pressable onPress={() => navigateToTab("mosaic")}>
          <View style={[styles.iconTextContainer]}>
            <Feather
              name="grid"
              size={35}
              style={
                activeTab === "placeholder"
                  ? styles.activeIcon
                  : styles.inactiveIcon
              }
            />
          </View>
        </Pressable>

        <Pressable onPress={() => navigateToTab("account", {selfAccount: true})}>
          <View style={styles.iconTextContainer}>
            <MaterialCommunityIcons
              name="account-outline"
              size={35}
              style={
                activeTab === "account"
                  ? styles.activeIcon
                  : styles.inactiveIcon
              }
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  navbarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#00b1b7",
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    paddingTop: 10,
    paddingBottom: 20,
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
  },
  iconTextContainerCamera: {
    backgroundColor: "#32ceca",
    height: 70,
    width: 70,
    borderRadius: 200,
    shadowOffset: { width: 3, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.4,
    elevation: 1,
  },
  activeTab: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 0.5,
  },
  activeIcon: {
    color: "white",
  },
  inactiveIcon: {
    color: "lightgray",
  },
});
