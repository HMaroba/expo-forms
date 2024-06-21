import { styles } from "@/styles/styles";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text>Welcome To Lebelo</Text>
      <Link href="/register">Register now </Link>
    </View>
  );
}
