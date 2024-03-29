import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { useState } from "react";
import { Stack, useLocalSearchParams, Link, useNavigation } from "expo-router";
import * as ImagePicker from "expo-image-picker";

import { Button } from "../components/buttons";
import Input from "../components/input";
import Header from "../components/header";

export default function SignUp() {
  const params = useLocalSearchParams();
  const navigation = useNavigation();

  // Declare a local state to manage selected image uri
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    // Select Image
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    // Check if image is selected
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  // Image URL
  const imageURL = require("../assets/facebook.png");
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: params.name,
          headerTitle: () => (
            <Header
              onPress={() => navigation.goBack()}
              headerText='Sign Up'
              subText='Find your best ever meal'
              isBackBtn={true}
            />
          ),
        }}
      />
      <Pressable style={styles.addPhoto} onPress={pickImageAsync}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={styles.image} />
        ) : (
          <Text style={{ fontFamily: "Poppins_400Regular" }}>Add Photo</Text>
        )}
      </Pressable>
      <View style={{ marginBottom: 16, width: "100%" }}>
        <Input label='Full Name' placeholder='Type your full name' />
      </View>
      <View style={{ marginBottom: 16, width: "100%" }}>
        <Input label='Email Address' placeholder='Type your email address' />
      </View>
      <View style={{ marginBottom: 24, width: "100%" }}>
        <Input label='Password' placeholder='Type your password' />
      </View>
      <Button buttonType='normal'>
        <Link href={{ pathname: "address", params: { name: "Address" } }}>
          Continue
        </Link>
      </Button>
      <Text style={styles.createAccount}>
        <Text
          style={{
            color: "#575757",
            fontWeight: "400",
            fontFamily: "Poppins_400Regular",
          }}>
          {" "}
          I Already Have an Account
        </Text>
        {"  "}
        <Link
          style={{
            color: "#EB0029",
            fontWeight: "600",
            fontFamily: "Poppins_400Regular",
          }}
          href={{ pathname: "signup", params: { name: "Sign Up" } }}>
          Log in
        </Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 24,
  },
  createAccount: {
    marginTop: 16,
    fontSize: 14,
    fontStyle: "normal",
  },
  addPhoto: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 150,
    backgroundColor: "#F0F0F0",
    marginBottom: 16,
    borderRadius: 150,
    borderColor: "#8D92A3",
    borderWidth: 1,
    borderStyle: "dashed",
    fontFamily: "Poppins_400Regular",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150,
  },
});
