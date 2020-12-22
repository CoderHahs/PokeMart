import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/card.jpg")}
      ></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>PSA-9 1st Edition Charizard</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/hrithik.jpg")}
            title="Hrithik Shah"
            subTitle="Pokemon Fan"
          ></ListItem>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingScreen;
