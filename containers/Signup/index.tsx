import MyButton from "@/components/MyButton";

import { useRouter } from "expo-router";
import { signUp } from "@/redux/actions";
import { useDispatch } from "react-redux";

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const dispatch = useDispatch();

  const handleSignUp = () => {
    const isNameEmpty = name.trim() === "";
    const isEmailEmpty = email.trim() === "";

    setNameError(isNameEmpty);
    setEmailError(isEmailEmpty);

    if (!isNameEmpty && !isEmailEmpty) {
      const user = { name, email };
      dispatch(signUp(user));
      router.navigate("/login");
      Alert.alert("Success", "Account created successfully!");
    } else {
      Alert.alert("Error", "Please fill in all required fields.");
    }
  };
  const navigateToSignin = () => {
    router.navigate("/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <Image
        source={require("../../assets/images/dog.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Image
            source={require("../../assets/images/Mail.png")} // Replace with your image path
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={name}
            onChangeText={(text) => {
              setName(text);
              setNameError(false); // Reset error when typing
            }}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            source={require("../../assets/images/Mail.png")} // Replace with your image path
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setEmailError(false); // Reset error when typing
            }}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            source={require("../../assets/images/Password.png")} // Replace with your image path
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            source={require("../../assets/images/Password.png")} // Replace with your image path
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder=" confirm Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <View style={{ position: "absolute", top: 300 }}>
          <MyButton
            title="SIGNUP"
            onClick={handleSignUp}
            backgroundColor="#FF8E3C"
          />
        </View>
      </View>

      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>
          Already have an account?{""}
          <TouchableOpacity style={styles.linkText1} onPress={navigateToSignin}>
            <Text style={styles.linkText1}>Sign In</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  bottomTextContainer: {
    flexDirection: "column", // Aligns items in a row
    justifyContent: "space-between", // Center the items
    position: "absolute",
    bottom: 9,
    left: 20,
  },
  form: {
    position: "absolute",
    top: 250,
    left: 10,
  },
  title: {
    fontSize: 45,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
    position: "absolute",
    top: 150,
    left: 20,
  },
  title1: {
    fontSize: 16,
    fontWeight: "300",
    textAlign: "center",
    marginBottom: 20,
    position: "absolute",
    top: 235,
    left: 40,
  },
  input: {
    height: 40,
    width: 150,
    fontWeight: "400",

    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  linkText: {
    color: "#FF8E3C",
    textAlign: "center",
    marginTop: 0,
    marginBottom: 40,
    marginLeft: 250,
    textDecorationLine: "underline",
  },
  image: {
    width: 142, // Fixed width
    height: 112, // Fixed height
    position: "absolute", // Use absolute positioning for top and left
    top: 10, // Fixed position from top
    left: 170, // Fixed position from left
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1, // Only the bottom border
    borderBottomColor: "gray", // Customize the color of the bottom border
    marginBottom: 12,
    width: 300,
    marginLeft: 20,
  },
  icon: {
    width: 20, // Set the width of your icon
    height: 20, // Set the height of your icon
    marginRight: 10,
  },
  bottomText: {
    fontSize: 16,
    width: 300,
    fontWeight: "300",
    textAlign: "center",

    position: "absolute",
    bottom: 10,
    left: 0,
  },
  linkText1: {
    color: "#FF8E3C",
    fontSize: 16,
    marginTop: 60,
    position: "absolute",
    bottom: -4,

    textDecorationLine: "none",
  },
  inputError: {
    borderColor: "red", // Highlights the field with an error
  },
});

export default SignupForm;
