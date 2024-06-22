import { styles } from "@/styles/styles";
import { Link, router } from "expo-router";
import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Register() {
  const insets = useSafeAreaInsets();
  const login = () => {
    router.push("/screens/dashboard");
  };

  const register = () => {
    router.push("/register");
  };
  return (
    <SafeAreaProvider style={styles.container2}>
      <View style={{ paddingTop: insets.top }}>
        <Text style={{ fontSize: 28 }}>Log in to your account.</Text>
        <Text style={{ fontSize: 16, marginBottom: 20 }}>
          Welcome back please enter your details
        </Text>
        <Text>Phone number *</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone"
          keyboardType="name-phone-pad"
        />
        <Text>Password *</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text>Remember Me for 30 days</Text>
          <Link href={"/"} style={{ marginLeft: "auto" }}>
            Forgot Password
          </Link>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => login()}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => register()}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}
