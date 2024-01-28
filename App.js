import React from "react";
import { StatusBar } from "expo-status-bar";
import { createContext, useEffect, useState } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Mosaic from "./components/Mosaic";
import Account from "./components/Account";
import UserFeed from "./components/UserFeed";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import CameraScreen from "./components/CameraScreen";
import { PictureProvider } from "./api/context";
import Login from "./components/pages/Login";

export default function App() {
  const [userData, setUserData] = React.useState({})
  const [userDocument, setUserDocument] = React.useState({})
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
          <Stack.Screen 
            name="Login" 
            component={Login}
            options={{ headerShown: false, gestureEnabled: false }} 
            initialParams={{
              userData: userData,
              setUserData: setUserData,
              setUserDocument: setUserDocument
            }} 
          />
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
