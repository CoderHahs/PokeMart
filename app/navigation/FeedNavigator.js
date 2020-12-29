import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ViewListingsScreen from "../screens/ViewListingsScreen";
import ListingScreen from "../screens/ListingScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="Listings"
      component={ViewListingsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ListingDetails"
      component={ListingScreen}
      options={{ title: "Details" }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
