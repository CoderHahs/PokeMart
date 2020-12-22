import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Button from "./app/components/Button";
import Card from "./app/components/Card";
import ListingScreen from "./app/screens/ListingScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return <ViewImageScreen />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});
