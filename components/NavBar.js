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
          <View style={[styles.iconTextContainer, styles.activeTab]}>
            <AntDesign name="home" size={35} style={styles.activeIcon}/>
          </View>
        </Pressable>
        <Pressable onPress={() => handleMosaicPress()}>
          <View style={[styles.iconTextContainer, styles.iconTextContainerCamera]}>
            <AntDesign name="camerao" size={35} style={styles.inactiveIcon} />
          </View>
        </Pressable>
        <Pressable onPress={() => handleAccountIconPress()}>
          <View style={styles.iconTextContainer}>
            <MaterialCommunityIcons name="account-outline" size={35} style={styles.inactiveIcon} />
          </View>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: 'absolute',
    bottom: 52,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navbarContainer: {
    
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "98%",
    backgroundColor: '#00b1b7',
    // borderTopEndRadius: 40,
    // borderTopStartRadius: 40,
    borderRadius: 40,
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
    padding: "10%",
    paddingHorizontal: "6%",
    borderRadius: 12,
  },
  iconTextContainerCamera: {
    backgroundColor: '#32ceca',
    padding: "10%",
    height: 70,
    width: 70,
    borderRadius: 200,
    opacity: 1,
    shadowOffset: { width: 3, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 0.5,
  },
  activeTab: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 0.5,
  },
  activeIcon: {
    color: "white"
  },
  inactiveIcon: {
    color: 'lightgray'
  }
});
