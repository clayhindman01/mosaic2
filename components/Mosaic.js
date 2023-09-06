import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, Dimensions, Pressable, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Mosaic({navigation}) {

  const handleAccountIconPress = () => {
    navigation.navigate("account")
  }

  const [state, setState] = useState([]);

  useEffect(() => {
    setState({
      height: Image.resolveAssetSource(require("../assets/testProfile.jpg")).height,
      width: Image.resolveAssetSource(require("../assets/testProfile.jpg")).width
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.MosaicText}>Mosaic</Text>
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
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
              <Image 
                source={{uri: require("../assets/background.jpg")}}
                style={[styles.image, {width: parseInt(state.width) * 4.5, height: parseInt(state.height) * 4.5}]}
              />
            </ScrollView>
          </ScrollView>
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
      padding: '5%',
      justifyContent: 'center',
      alignItems: "center"
    },
    image: {
      // tintColor: 'rgba(52, 52, 52, 0.8)',
    },
    accountIcon: {
      opacity:0.93,
    },
    iconContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      paddingBottom: 30,
      paddingHorizontal: '2.5%'
    },
    MosaicText: {
      fontSize: 30,
      opacity: 0.93,
      fontWeight: '400'
    }
})