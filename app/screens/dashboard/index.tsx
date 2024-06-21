import { styles } from "@/styles/styles";
import { Link, router } from "expo-router";
import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Dashboard() {
  const insets = useSafeAreaInsets();
  const login = () => {
    router.push("/screens/dashboard/transactions");
  };
  return (
    <SafeAreaProvider style={styles.container}>
      <View style={{ paddingTop: insets.top }}>
        <Text style={{ fontSize: 28, fontWeight: 500, color: "green" }}>
          Hi Hlalele
        </Text>
        <Text style={{ fontSize: 34, marginBottom: 20, marginTop: 20 }}>
          Find your Monetary Finese
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send Money</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Withdraw</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Payments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => login()}>
          <Text style={styles.buttonText}>Transactions</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}
