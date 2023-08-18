import React from 'react'
import { StyleSheet, View, SafeAreaView, Image, Text, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Account({navigation}) {

    const handleBack = () => {
        navigation.pop()
    }
    
  return (
  <SafeAreaView styles={styles.container}>
    <View style={styles.iconContainer}>
        <Pressable
            onPress={() => handleBack()}
        >
            <Icon
                name="arrow-back-ios"
                size={35}
                style={styles.accountIcon}
            />
        </Pressable>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.accountPictureContainer}>
            {/* TODO: get from user database */}
            <Image 
                source={require("../assets/testProfile.jpg")} 
                style={styles.accountPicture}
            />
        </View>
        <View style={styles.friendsContainer}>
            <Text style={styles.textStyle}>Friends</Text>
            <Text style={styles.textStyle}>Tiles Taken</Text>
        </View>
      </View>
  </SafeAreaView>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    accountIcon: {
        opacity:0.93,
      },
      iconContainer: {
        marginTop: Platform.OS === 'ios'? null: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingBottom: 15,
        paddingHorizontal: '2.5%'
      },
      accountPicture: {
        borderRadius: 100,
        height: 100,
        width: 100,
      },
      friendsContainer: {
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'space-around',
        padding: 15,
      },
      textStyle: {
        opacity: .93,
        fontSize: 18,
      }
})
