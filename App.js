import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { getUser } from "./api/api_utils"
import Mosaic from './components/Mosaic';

export default function App() {

  useEffect(() => {
    console.log(getUser())
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Mosaic />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
