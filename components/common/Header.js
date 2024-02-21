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
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Header(props) {
  const handleBack = () => {
    props.navigation.pop();
  };

  return (
    <View style={styles.iconContainer}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../../assets/testProfile.jpg")}
          style={styles.accountPicture}
        />
        <Text style={styles.MosaicText}>Mosaic</Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Ionicons name="notifications-outline" color="white" size={30} />
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
    paddingLeft: 10,
  },
  accountPicture: {
    borderRadius: 100,
    height: 40,
    width: 40,
  },
});
