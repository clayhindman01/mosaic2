import React from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

export default function Login({ navigation }) {

    const handleClick = () => {
        navigation.navigate('home')
    }
  return (
    <View style={styles.container}>
        <TextInput placeholder='Username' style={styles.input} placeholderTextColor={"lightgray"} />
        <TextInput placeholder='Password' secureTextEntry={true} style={styles.input} placeholderTextColor={"lightgray"}/>
        <Button title="Login" onPress={handleClick} style={styles.button}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "ios" ? 50 : 20,
        flex: 1,
        backgroundColor: "#0a0a0a",
        justifyContent: 'center',
        alignItems: "center"
    },
    input: {
        color: "white"
    },
    button: {
        backgroundColor: "#00b1b7",
    }
})