import React from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import { useState } from "react";
import { useEffect } from "react";
import AppText from "../components/AppText";
import Button from "../components/Button";

function ViewListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);

  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <View style={styles.buttonsContainer}>
            <Button title="Retry" onPress={loadListings} />
          </View>
        </>
      )}
      <ActivityIndicator color="#000" animating={loading} size="large" />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    paddingHorizontal: 50,
    width: "100%",
  },
  screen: {
    padding: 15,
    backgroundColor: colors.lightGrey,
  },
});

export default ViewListingsScreen;
