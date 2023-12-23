import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { getUser } from "./api/api_utils";
import Mosaic from "./components/Mosaic";
import Account from "./components/Account";
import UserFeed from "./components/UserFeed";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavBar from "./components/NavBar";

export default function App() {
  useEffect(() => {
    console.log(getUser());
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          // animation,
        }}
      >
        <Stack.Screen name="home" component={UserFeed} />
        <Stack.Screen name="mosaic" component={Mosaic} />
        <Stack.Screen name="account" component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
