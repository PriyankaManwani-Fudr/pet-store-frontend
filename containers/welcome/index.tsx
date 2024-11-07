import { Text, View, Image, StyleSheet } from "react-native";
import MyButton from "../../components/MyButton";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Welcome = () => {
  const router = useRouter();

  const HandleClick = () => {
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
        source={require("../../assets/images/welcome.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>
        Get started by finding the perfect companion for your family!
      </Text>
      <View style={{ position: "absolute", top: 600 }}>
        <MyButton
          title="Welcome"
          onClick={HandleClick}
          backgroundColor="#FF8E3C"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 371,
    height: 400,
    position: "absolute",
    top: 30,

    left: 40,
  },

  text: {
    position: "absolute",
    top: 450, // Fixed position from top
    left: 10,

    fontSize: 32,
    fontWeight: "700",
    lineHeight: 36.77,
    textAlign: "center",
  },
});
export default Welcome;
