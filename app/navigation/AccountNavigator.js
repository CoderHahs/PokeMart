import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MessageScreen from "../screens/MessageScreen";
import AccountScreen from "../screens/AccountScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Account"
      component={AccountScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Messages"
      component={MessageScreen}
      options={{ title: "Messages" }}
    />
  </Stack.Navigator>
);

export default AccountNavigator;
