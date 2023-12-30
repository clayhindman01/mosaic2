import { StatusBar } from "expo-status-bar";
import { createContext, useEffect, useState } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { getUser } from "./api/api_utils";
import Mosaic from "./components/Mosaic";
import Account from "./components/Account";
import UserFeed from "./components/UserFeed";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import CameraScreen from "./components/CameraScreen";
import { PictureProvider } from "./api/context";

export default function App() {
  useEffect(() => {
    console.log(getUser());
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    <PictureProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: "none",
          }}
        >
          <Stack.Screen name="home" component={UserFeed} />
          <Stack.Screen name="mosaic" component={Mosaic} />
          <Stack.Screen name="account" component={Account} />
          <Stack.Screen name="search" component={Search} />
          <Stack.Screen name="camera" component={CameraScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PictureProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
