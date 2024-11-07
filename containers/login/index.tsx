import MyButton from "@/components/MyButton";
import Welcome from "@/containers/welcome";
import { useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions";

import React, { useEffect, useState } from "react";
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

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  // const savedUser = useSelector((state) => state.auth?.user || null);
  const users = useSelector((state) => state.users.users);
  // console.log("Users from Redux:", users);

  const handleLogin = () => {
    const user = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );
    console.log("current user", user);

    if (user) {
      console.log("current user", user);
      dispatch(login(user));
      router.replace("/Products");
    } else {
      Alert.alert("User not found", "Please sign up first.");
      router.navigate("/Signup");
    }
  };
  const navigateToSignup = () => {
    router.navigate("/Signup");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.title1}>Please sign in to continue.</Text>
      <Image
        source={require("../../assets/images/login.png")}
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
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
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

        <Text style={styles.linkText}>FORGET</Text>

        <View style={{ position: "absolute", top: 200 }}>
          <MyButton
            title="LOGIN"
            onClick={handleLogin}
            backgroundColor="#FF8E3C"
          />
        </View>
      </View>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>
          Don't have an account?{" "}
          <TouchableOpacity style={styles.linkText1} onPress={navigateToSignup}>
            <Text style={styles.linkText1}>Sign up</Text>
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
    top: 350,
    left: 10,
  },
  title: {
    fontSize: 64,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
    position: "absolute",
    top: 150,
    left: 40,
    fontFamily: "poppins",
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
    fontWeight: "300",
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
    textDecorationLine: "none",
  },
  linkText1: {
    color: "#FF8E3C",
    fontSize: 16,
    marginTop: 60,
    bottom: -4,

    textDecorationLine: "none",
  },
  image: {
    width: 200, // Fixed width
    height: 699, // Fixed height
    position: "absolute", // Use absolute positioning for top and left
    bottom: 70, // Fixed position from top
    left: 170, // Fixed position from left
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1, // Only the bottom border
    borderBottomColor: "gray", // Customize the color of the bottom border
    marginBottom: 12,
  },
  icon: {
    width: 20, // Set the width of your icon
    height: 20, // Set the height of your icon
    marginRight: 10, // Space between icon and input
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
});

export default LoginForm;
