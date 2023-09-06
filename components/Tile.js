import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function Tile() {

  return (
    <View style={styles.tile}></View>
  )
}

const styles = StyleSheet.create({
    tile: {
        width: 25,
        height: 40,
        backgroundColor: 'gray',
        marginTop: -40,
    }
})