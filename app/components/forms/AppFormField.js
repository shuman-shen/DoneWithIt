import React from "react";
import { StyleSheet } from "react-native";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

const AppFormField = ({ name, ...otherProps }) => {
  const {
    setFieldValue,
    values,
    setFieldTouched,
    errors,
    touched,
  } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]}></ErrorMessage>
    </>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});
