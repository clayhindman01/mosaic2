import React from "react";
import { StyleSheet } from "react-native";
import Mosaic from "./components/pages/Mosaic";
import Account from "./components/pages/Account";
import UserFeed from "./components/pages/UserFeed";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "./components/pages/Search";
import CameraScreen from "./components/pages/CameraScreen";
import { PictureProvider } from "./api/context";
import Login from "./components/pages/Login";

export default function App() {
  
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
          />
          <Stack.Screen name="home" component={UserFeed} />
          <Stack.Screen name="mosaic" component={Mosaic} />
          <Stack.Screen name="account" component={Account} />
          <Stack.Screen 
            name="search" 
            component={Search}
          />
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
