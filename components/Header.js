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
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Header(props) {

  const handleBack = () => {
    props.navigation.pop();
  };

  return (
    <View style={styles.iconContainer}>
      {props.isBack ? (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
        <Pressable onPress={() => handleBack()}>
          <Icon name="arrow-back-ios" size={35} style={styles.accountIcon} />
        </Pressable>
        {/* <View style={{flex: 1}}> */}
          <Text style={[styles.MosaicText, {fontSize: 26}]}>Clay Hindman</Text>
        {/* </View> */}
        <View style={{width: 20}}></View>
        </View>
      ) : (
        <Text style={styles.MosaicText}>Mosaic</Text>
      )}
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
  },
  MosaicText: {
    marginTop: Platform.OS === 'ios'? 10: null,
    fontSize: 30,
    opacity: 0.93,
    fontWeight: "400",
  },
});
