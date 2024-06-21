import { styles } from "@/styles/styles";
import { Link } from "expo-router";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text>Welcome To Lebelo</Text>
      <Link href="/register">Register now </Link>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
