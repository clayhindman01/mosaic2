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
} from "react-native";
import Header from "./Header";
import NavBar from "./NavBar";

export default function Mosaic({ navigation }) {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState({
      height: Image.resolveAssetSource(require("../assets/testProfile.jpg"))
        .height,
      width: Image.resolveAssetSource(require("../assets/testProfile.jpg"))
        .width,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} isBack={true} />
      <View style={styles.mosaic}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <Image
              source={require("../assets/placeholder.jpg")}
              style={[
                styles.image,
                {
                  width: 1000,
                  height: 1000,
                },
              ]}
            />
          </ScrollView>
        </ScrollView>
      </View>
      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "center",
    padding: "3%",
  },
  mosaic: {
    backgroundColor: "black",
    opacity: 0.93,
    width: "97%",
    height: Platform.OS === "ios" ? "90%" : "83%",
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    padding: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    // tintColor: "rgba(52, 52, 52, 0.8)",
  },
  accountIcon: {
    opacity: 0.93,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingBottom: 30,
    paddingHorizontal: "2.5%",
  },
});
