import MyButton from "@/components/MyButton";
import Welcome from "@/containers/welcome";
import { useRouter } from "expo-router";

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
console.error = () => {};

console.warn = () => {};
const App = () => {
  return (
    <View style={{ backgroundColor: "#696969" }}>
      <Welcome />
    </View>
  );
};

export default App;
