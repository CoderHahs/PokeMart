import React from "react";

export const navigationRef = React.createRef();

const navigate = (name, params) => {
  try {
    navigationRef.current?.navigate(name, params);
  } catch (error) {
    console.log("Error navigating to correct screen");
  }
};

export default {
  navigate,
};
