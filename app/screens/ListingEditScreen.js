import React from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";
import { AppFormField, SubmitButton } from "../components/forms";

import AppForm from "../components/forms/AppForm";
import AppFormImagePicker from "../components/forms/AppFormImagePicker";
import AppFormPicker from "../components/forms/AppFormPicker";
import Screen from "../components/Screen";
import listingsApi from "../api/listings";
import useLocation from "../hooks/useLocation";
import { useState } from "react";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().required().min(1, "Please select at least one image."),
});

const categories = [
  { label: "Cards", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Figurines", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Holos", value: 3, backgroundColor: "blue", icon: "lock" },
];

function ListingEditScreen() {
  const location = useLocation();
  const [uploadVisible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setVisible(false);
      return alert("Could not save the listings.");
    }

    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name="images" />
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
