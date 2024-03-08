import React from 'react'
import { View, Text, Pressable } from 'react-native'

export default function SearchResultAccount({ user, navigation }) {
  return (
    <Pressable 
        style={{ backgroundColor: 'lightgray', padding: 10, marginBottom: 10}} 
        onPress={() => {
            navigation.navigate('account', {user: user})
        }}
    >
        <Text>{user.user_name}</Text>
    </Pressable>
  )
}
