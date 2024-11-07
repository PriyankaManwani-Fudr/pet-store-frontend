import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  Button,
} from "react-native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BottomTab from "../../components/BottomTab";
import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { logout, signUp } from "@/redux/actions";
import RootLayout from "@/app/_layout";
import MyButton from "@/components/MyButton";
import { router, useRouter } from "expo-router";

const Products = () => {
  // Local images from assets folder
  const dispatch = useDispatch();
  const router = useRouter();
  const [sampleProducts, setSampleProducts] = useState([]);
  const [sampleOffers, setSampleOffers] = useState([]);

  const handleLogout = () => {
    dispatch(logout());
    router.replace("/login");
  };
  // const sampleProducts = [
  //   {
  //     id: 1,
  //     name: "Product 1",
  //     image: require("../../assets/images/Banner.png"),
  //   },
  //   {
  //     id: 2,
  //     name: "Product 2",
  //     image: require("../../assets/images/login.png"),
  //   },
  //   {
  //     id: 3,
  //     name: "Product 3",
  //     image: require("../../assets/images/login.png"),
  //   },
  // ];

  // const sampleOffers = [
  //   {
  //     id: 1,
  //     name: "SKATRS Winter Hoodie With Pockets",
  //     image: require("../../assets/images/Banner.png"),
  //     price: "$10",
  //   },
  //   {
  //     id: 2,
  //     name: "SKATRS Winter Hoodie With Pockets",
  //     image: require("../../assets/images/login.png"),
  //     price: "$10",
  //   },
  //   {
  //     id: 3,
  //     name: "SKATRS Winter Hoodie With Pockets",
  //     image: require("../../assets/images/login.png"),
  //     price: "$10",
  //   },
  // ];

  useEffect(() => {
    axios
      .get("https://fakestoreapiserver.reactbd.com/amazonproducts")
      .then((response) => {
        setSampleProducts(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    axios
      .get("https://fakestoreapiserver.reactbd.com/walmart")
      .then((response) => {
        
        
        setSampleOffers(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <View style={styles.pageContainer}>
      {/* <View style={styles.logout}>
        <Button title="Logout" onPress={handleLogout} color="#FF8E3C" />
      </View> */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.banner}>
          <Image
            source={require("../../assets/images/Banner.png")}
            resizeMode="contain"
            style={styles.image}
          />
        </View>

        <Text style={styles.text}>Popular Categories</Text>
        <View style={styles.productsContainer}>
          <FlatList
            data={sampleProducts}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.productCard}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.productImage}
                />
                <Text style={styles.productName}>{item.title}</Text>
              </View>
            )}
            contentContainerStyle={styles.container}
            scrollEnabled={false} // Disable FlatList scrolling
          />
        </View>

        <Text style={styles.text1}>Best Offers</Text>
        <View style={styles.offersContainer}>
          <FlatList
            data={sampleOffers}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.offerCard}>
                <Image source={{ uri: item.image }} style={styles.offerImage} />
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.offerPrice}>{item.price}</Text>
              </View>
            )}
            contentContainerStyle={styles.container}
            scrollEnabled={false} // Disable FlatList scrolling
          />
        </View>
      </ScrollView>
      {/* Fixed Bottom Tab */}
      <View style={styles.bottomTabContainer}>
        <BottomTab />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "#E8E5E5",
    paddingTop: 0,
  },
  banner: {
    width: "100%",
    height: 268,
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: "90%",
    height: "100%",
  },
  scrollContainer: {
    paddingHorizontal: 10,
    paddingBottom: 80, // Add space for Bottom Tab
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 36.77,
    textAlign: "center",
    marginBottom: 10,
  },
  text1: {
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 36.77,
    textAlign: "center",
    marginBottom: 10,
  },
  productsContainer: {
    marginBottom: 20,
  },
  offersContainer: {
    marginBottom: 60,
  },
  container: {
    justifyContent: "center",
  },
  productCard: {
    width: 150,
    height: 150,
    backgroundColor: "#FFFFFF",
    margin: 6,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  productImage: {
    width: "100%",
    height: "60%",
    marginTop: 0,
    resizeMode: "cover",
  },
  productName: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
    fontWeight: "700",
  },
  offerCard: {
    width: 161,
    height: 212,
    backgroundColor: "#FFFFFF",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  offerImage: {
    width: "100%",
    height: "60%",
    resizeMode: "cover",
  },
  offerPrice: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "700",
    color: "#FF8E3C",
    marginTop: 20,
  },
  bottomTabContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,

    // Adjust as per your BottomTab height
  },
  logout: {
    width: "20%",
    position: "absolute",
    top: 10,
  },
});

export default Products;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
