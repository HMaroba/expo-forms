import { styles } from "@/styles/styles";
import { Link } from "expo-router";
import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Register() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider style={styles.container2}>
      <View style={{ paddingTop: insets.top }}>
        <Text style={{ fontSize: 28 }}>Log in to your account.</Text>
        <Text style={{ fontSize: 16, marginBottom: 20 }}>
          Welcome back please enter your details
        </Text>
        <Text>Email Address</Text>
        <TextInput style={styles.input} placeholder="Enter your email" />
        <Text>Password</Text>
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log in with Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}