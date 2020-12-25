import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, LogBox } from "react-native";
import Button from "./app/components/Button";
import Card from "./app/components/Card";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import Icon from "./app/components/Icon";
import ListingScreen from "./app/screens/ListingScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MessageScreen from "./app/screens/MessageScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ViewListingsScreen from "./app/screens/ViewListingsScreen";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  return <LoginScreen />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});
