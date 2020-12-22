import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons
          name="close"
          color="white"
          size={30}
        ></MaterialCommunityIcons>
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={30}
        ></MaterialCommunityIcons>
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/card.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    right: 15,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    left: 15,
  },
  image: {
    width: "100%",
    height: "100%",
    top: 20,
  },
});

export default ViewImageScreen;
