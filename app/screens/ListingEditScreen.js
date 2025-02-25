import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";
//import useApi from "../hooks/useApi";
import listingApi from "../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  images: Yup.array().min(1, "Please select at least one image."),
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
  },
  {
    label: "Cars",
    value: 2,
    backgroundColor: "#fd9644",
    icon: "car",
  },
  {
    label: "Camera",
    value: 3,
    backgroundColor: "#fed330",
    icon: "camera",
  },
  {
    label: "Games",
    value: 4,
    backgroundColor: "#26de81",
    icon: "cards",
  },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
  },
  {
    label: "Sports",
    value: 6,
    backgroundColor: "#45aaf2",
    icon: "basketball",
  },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "#4b7bec",
    icon: "headphones",
  },
  {
    label: "Books",
    value: 8,
    backgroundColor: "#a463e6",
    icon: "book-open-variant",
  },
  {
    label: "Other",
    value: 9,
    backgroundColor: "#788da2",
    icon: "application",
  },
];

const ListingEditScreen = () => {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [uploadVisible, setUploadVisible] = useState(false);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingApi.addListing(
      { ...listing, location },
      (progress) => {
        setProgress(progress);
      }
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Sorry, operation to add a new listing failed.");
    }
    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <AppForm
        initialValues={{
          images: [],
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField
          name="title"
          placeholder="Title"
          autoCapitalize="sentences"
          maxLength={255}
        />
        <AppFormField
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          maxLength={8}
          width={120}
        />
        <AppFormPicker
          placeholder="Category"
          name="category"
          items={categories}
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          width="50%"
        />
        <AppFormField
          name="description"
          placeholder="Description"
          autoCapitalize="sentences"
          multiline
          numberOfLines={3}
          maxLength={255}
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  container: { padding: 10 },
});
