import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import { useEffect } from "react";
import AppText from "../components/AppText";
import Button from "../components/Button";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

function ViewListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <View style={styles.buttonsContainer}>
            <Button title="Retry" onPress={loadListings} />
          </View>
        </>
      )}
      <ActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            thumbnailUrl={item.images[0].thumbnailUrl}
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
