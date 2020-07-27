import React from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import ErrorMessage from "../components/ErrorMessage";

import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              icon="email"
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              onBlur={() => setFieldTouched("email")}
              textContentType="emailAddress"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
            />
            <ErrorMessage
              error={errors.email}
              visible={touched.email}
            ></ErrorMessage>
            <AppTextInput
              icon="key"
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              onBlur={() => setFieldTouched("password")}
              textContentType="password"
              secureTextEntry
              onChangeText={handleChange("password")}
            />
            <ErrorMessage
              error={errors.password}
              visible={touched.password}
            ></ErrorMessage>
            <AppButton title="Login" onPress={handleSubmit}></AppButton>
          </>
        )}
      </Formik>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { padding: 10 },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
