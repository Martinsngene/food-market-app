import { Link, Stack } from "expo-router";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "../components/buttons";
// import Home from "../screens/home";
import Input from "../components/input";
import { icons } from "../icons";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          // https://reactnavigation.org/docs/headers#setting-the-header-title
          title: "Sign In", // https://reactnavigation.org/docs/headers#adjusting-header-styles
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />

      {/* <Home /> */}
      <View style={{ marginBottom: 16, width: "100%" }}>
        <Input label='Email Address' placeholder='Type your email address' />
      </View>
      <View style={{ marginBottom: 24, width: "100%" }}>
        <Input label='Password' placeholder='Type your password' />
      </View>
      <Button buttonType='normal'>
        <Link href={{ pathname: "signup", params: { name: "Sign Up" } }}>
          Sign in
        </Link>
      </Button>

      <Link
        style={styles.forgotPassWord}
        href={{ pathname: "signup", params: { name: "Sign Up" } }}>
        Forgot Password
      </Link>
      <Text style={styles.continueText}>- OR Continue with -</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: 250,
          marginBottom: 24,
        }}>
        <Button buttonType='icon' image={icons.googleImage}>
          Google
        </Button>
        <Button buttonType='icon' image={icons.facebookImage}>
          Facebook
        </Button>
      </View>
      <Text style={styles.createAccount}>
        <Text style={{ color: "#575757", fontWeight: "400" }}>
          {" "}
          Create An Account
        </Text>
        {"  "}
        <Link
          style={{ color: "#EB0029", fontWeight: "600" }}
          href={{ pathname: "signup", params: { name: "Sign Up" } }}>
          Sign Up
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
    // justifyContent: "center",
    paddingTop: 82,
    paddingHorizontal: 24,
  },
  forgotPassWord: {
    color: "#EB0029",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
    textDecorationLine: "underline",
    marginTop: 12,
    marginBottom: 24,
  },
  continueText: {
    color: "#575757",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "300",
    marginBottom: 20,
    textAlign: "center",
  },
  createAccount: {
    fontSize: 14,
    fontStyle: "normal",
  },
});
