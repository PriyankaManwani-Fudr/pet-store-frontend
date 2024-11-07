import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const MyButton = ({ title, onClick, backgroundColor }) => {
  return (
    <TouchableOpacity
      style={[styles.button, backgroundColor ? { backgroundColor } : {}]}
      onPress={onClick}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 335,
    height: 42,
    paddingVertical: 9,
    paddingHorizontal: 52,
    borderRadius: 15,
    // backgroundColor: "#FF8E3C",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FF8E3C",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "700",
    gap: 10,
  },
});

export default MyButton;
