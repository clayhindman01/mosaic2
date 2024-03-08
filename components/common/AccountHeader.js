import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Text,
  Pressable,
  Platform,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";

export default function AccountHeader(props) {

  return (
    <View style={styles.iconContainer}>
      <Text style={styles.MosaicText}>@{props.user.user_name}</Text>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Feather name="menu" color="white" size={30} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    marginTop: Platform.OS === "ios" ? 50 : 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 15,
  },
  MosaicText: {
    fontSize: 32,
    opacity: 0.93,
    fontWeight: "400",
    color: "white",
  },
  accountPicture: {
    borderRadius: 100,
    height: 40,
    width: 40,
  },
});
