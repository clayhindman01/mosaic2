import React, { useState } from 'react'
import { StyleSheet, TextInput, Pressable, Image, View, Text } from 'react-native'
import { loginUser, registerFirebaseUser } from '../../api/api_utils';

export default function Login({route, navigation}) {

  const [state, setState] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)

  const updateState = (key, value) => {
    setState({
      ...state,
      [key]: value
    })
  }

  const login = () => {
    loginUser(state.email, state.password, navigation)  
  }

  return (
    <View style={styles.container}>
        <Text style={{ fontSize: 40, color: "white" }}>Mosaic</Text>
        <View style={{ height: '15%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={styles.textInputContainer}>
            <TextInput 
              placeholder="Email" 
              value={state.email} 
              style={styles.textInput} 
              placeholderTextColor="lightgray"
              onChangeText={text => updateState('email', text)} 
            />
          </View>
          
          <View style={styles.textInputContainer}>
            <TextInput 
              placeholder="Password" 
              value={state.password} 
              secureTextEntry={!showPassword}
              placeholderTextColor="lightgray"
              style={styles.textInput} 
              onChangeText={text => updateState('password', text)}
            />
          </View>
        </View>
        
        <View style={{flexDirection: 'row', width: '80%', justifyContent: 'center'}}>
          <Pressable onPress={() => login()} style={styles.loginPressable}>
              <Text style={styles.buttonText}>Sign in</Text>
          </Pressable>
        </View>
        
        <View style={{flexDirection: 'row'}}> 
          <Text style={{fontSize: 16, color: 'white'}}>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate('signup')}> 
            <Text style={{color: '#00b1b7', fontSize: 16}}> Sign up</Text>
          </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#1a1a1a",
        justifyContent: 'space-evenly'
    },
    textInput: {
        paddingLeft: 10,
        opacity: 0.75,
        width: "100%",
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    logo: {
        marginTop: '16%',
        width: 300,
        height: 100
    },
    loginPressable: {
        paddingHorizontal: 20,
        width: "100%",
        height: 50,
        paddingVertical: 10,
        backgroundColor: "#00b1b7",
        opacity: 0.85,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-5%',
        shadowOffset: { width: 1, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 1,
    },
    buttonText: {
        color: '#2a2c33',
        fontWeight: "600",
        fontSize: 20,
    },
    socialMediaIcon: {
      backgroundColor: 'white',
      width: 85,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      shadowOffset: { width: 1, height: 1 },
      shadowColor: 'black',
      shadowOpacity: 0.2,
      elevation: 1,
    },
    textInputContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '90%',
      height: 50,
      shadowOffset: { width: 1, height: 2 },
      shadowColor: 'black',
      shadowOpacity: 0.2,
      elevation: 1,
      borderRadius: 10,
      borderColor: "lightgray",
      borderWidth: 1,
    },
})