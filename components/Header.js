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

export default function Header(props) {
  const handleAccountIconPress = () => {
    props.navigation.navigate("account");
  };

  const handleBack = () => {
    props.navigation.pop();
  };

  return (
    <View style={styles.iconContainer}>
      {props.isBack ? (
        <Pressable onPress={() => handleBack()}>
          <Icon name="arrow-back-ios" size={35} style={styles.accountIcon} />
        </Pressable>
      ) : (
        <Text style={styles.MosaicText}>Mosaic</Text>
      )}
      <Pressable onPress={() => handleAccountIconPress()}>
        <Icon
          name="account-circle"
          size={65}
          color="black"
          style={styles.accountIcon}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  accountIcon: {
    opacity: 0.93,
  },
  iconContainer: {
    marginTop: Platform.OS === "ios" ? null : 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingBottom: 15,
    paddingHorizontal: "2.5%",
  },
  MosaicText: {
    fontSize: 30,
    opacity: 0.93,
    fontWeight: "400",
  },
});
