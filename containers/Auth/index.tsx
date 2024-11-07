import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import MyButton from "../../components/MyButton";
import { useRouter } from "expo-router";
import * as Font from "expo-font";
const Auth = () => {
  const router = useRouter();
  const Handlepress = () => {
    router.navigate("/login");
  };
  const Handlepress1 = () => {
    router.navigate("/Signup");
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        padding: 0,
        margin: 0,
      }}
    >
      <Image
        source={require("../../assets/images/auth.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>
        Discover a world of joy and companionship at Happy pet
      </Text>
      <View style={{ position: "absolute", top: 550 }}>
        <MyButton
          title="Login"
          onClick={Handlepress}
          backgroundColor="#FF8E3C"
        />
      </View>
      <View style={{ position: "absolute", top: 600 }}>
        <MyButton
          title="Sign up"
          onClick={Handlepress1}
          backgroundColor="white"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 300, // Fixed width
    height: 350, // Fixed height
    position: "absolute", // Use absolute positioning for top and left
    top: 30, // Fixed position from top
    left: 90, // Fixed position from left
  },

  text: {
    position: "absolute",
    top: 400, // Fixed position from top
    left: 10,

    // Make sure to load this font
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 36.77,
    textAlign: "center",
  },
});
export default Auth;
