import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import Button from "../components/Button";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={4}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <View style={styles.buttonsContainer}>
        <Button title="Login" />
        <Button title="Register" color="primary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 50,
    width: "100%",
  },
  logo: {
    width: 337,
    height: 230,
    position: "absolute",
    top: 100,
  },
});

export default WelcomeScreen;
