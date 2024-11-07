import { Stack, useRouter } from "expo-router";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Button, Image, View, StyleSheet, Text, Alert } from "react-native";
import configureStore from "../redux/store"; // Import store configuration
import { logout } from "@/redux/actions";
import LoginForm from "./login";

const { store } = configureStore(); // Initialize the store here

function AppNavigator() {
  const router = useRouter();
  const currentUser = useSelector((state) => state.auth.currentUser);

  console.log("Current user on ujulaunch:", currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      router.replace("/Products");
    }
  }, [currentUser]);

  const handleLogout = () => {
    dispatch(logout());
    router.replace("/login");
  };

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "white",
        },
        headerTitle: () => (
          <Image
            source={require("../assets/images/Logo.png")}
            style={{ width: 40, height: 40 }}
          />
        ),
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="Auth" />
      <Stack.Screen name="Signup" />
      <Stack.Screen name="login" />
      <Stack.Screen
        name="Products"
        options={{
          headerTitle: () => (
            <View style={styles.headerContainer}>
              <Image
                source={require("../assets/images/Logo.png")}
                style={{ width: 40, height: 40 }}
              />
              {currentUser && (
                <Text style={styles.userName}>Hello, {currentUser.name}</Text>
              )}
              <Button title="Logout" onPress={handleLogout} color="#FF8E3C" />
            </View>
          ),
        }}
      />
    </Stack>
  );
}

function RootLayout() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "white",
  },
  logo: {
    width: 40,
    height: 40,
  },
  userName: {
    fontSize: 16,

    color: "black",
  },
});

export default RootLayout;
