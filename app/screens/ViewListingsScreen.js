import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "PSA-9 Charizard",
    price: 2000,
    image: require("../assets/card.jpg"),
  },
  {
    id: 2,
    title: "Rayquaza C lv. X",
    price: 1500,
    image: require("../assets/card2.jpg"),
  },
];

function ViewListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 15,
    backgroundColor: colors.lightGrey,
  },
});

export default ViewListingsScreen;
