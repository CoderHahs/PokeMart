import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Image, StyleSheet } from "react-native";
import ImageInput from "./app/components/ImageInput";
import Screen from "./app/components/Screen";
import Button from "./app/components/Button";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return <ListingEditScreen />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});
