import React from "react";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

function AccountScreen(props) {
  return (
    <Screen>
      <ListItem
        title="Hrithik Shah"
        subTitle="hrithikhahs@gmail.com"
        image={require("../assets/hrithik.jpg")}
      />
    </Screen>
  );
}

export default AccountScreen;
