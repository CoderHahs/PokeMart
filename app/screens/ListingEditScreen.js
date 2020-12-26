import React from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";
import { AppFormField, SubmitButton } from "../components/forms";

import AppForm from "../components/forms/AppForm";
import AppFormPicker from "../components/forms/AppFormPicker";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Cards", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Figurines", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Holos", value: 3, backgroundColor: "blue", icon: "lock" },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <View style={styles.buttonContainer}>
          <SubmitButton title="Post" />
        </View>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 50,
    width: "100%",
    paddingTop: 40,
  },
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
