import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Mosaic() {
  return (
    <SafeAreaView style={styles.container}>
      <Icon name="account-circle" size={65} color="black" style={styles.accountIcon} />
        <View style={styles.mosaic}>
          <Image 
            source={require("../assets/testProfile.jpg")}
            style={styles.image}
          />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "center"
    },
    mosaic: {
      backgroundColor: 'black',
      opacity: 0.93,
      flex: 1,
      marginTop: 150,
      marginRight: 20,
      height: '75%',
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50,
      borderBottomLeftRadius: 50,
      padding: 100,
      position: 'relative',
      left: 0,
      justifyContent: 'center',
      alignItems: "center"
    },
    image: {
      tintColor: 'gray',
      // opacity: 0.5,
      height: '125%',
      width: '170%'
    },
    accountIcon: {
      position: 'absolute',
      right: 5,
      top: 50,
      opacity:0.93,
    }
})