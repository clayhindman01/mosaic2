import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, Dimensions, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Tile from './Tile';

export default function Mosaic({navigation}) {

  const handleAccountIconPress = () => {
    navigation.navigate("account")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconContainer}>
        {/* <Icon
          name="arrow-back-ios"
          size={35}
          style={styles.accountIcon}
        /> */}
        <Pressable
        onPress={() => handleAccountIconPress()} >
          <Icon 
            name="account-circle" 
            size={65} 
            color="black" 
            style={styles.accountIcon}
          />
        </Pressable>
      </View>
        <View style={styles.mosaic}>
          <Image 
            source={require("../assets/testProfile.jpg")}
            style={styles.image}
          />
          <Tile />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      width: Dimensions.get('window').width,
      flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: "center",
        marginTop: 50,
    },
    mosaic: {
      backgroundColor: 'black',
      opacity: 0.93,
      width: '97%',
      marginRight: -10,
      height: '85%',
      borderTopRightRadius: 40,
      borderBottomRightRadius: 40,
      borderBottomLeftRadius: 40,
      padding: 100,
      justifyContent: 'center',
      alignItems: "center"
    },
    image: {
      tintColor: 'rgba(52, 52, 52, 0.8)',
      height: '125%',
      width: '170%'
    },
    accountIcon: {
      opacity:0.93,
    },
    iconContainer: {
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      paddingBottom: 30,
      paddingHorizontal: '2.5%'
    }
})