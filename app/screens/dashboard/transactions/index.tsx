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
        <Text style={{ fontSize: 28, fontWeight: 500, color: "green" }}>
          My Transactions
        </Text>

        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={{
              marginTop: 10,
              padding: 5,
              height: 70,
              width: "45%",
              borderWidth: 2,
              borderRadius: 5
            }}
          >
            <Text>Received</Text>
            <Text>5600</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 10,
              padding: 5,
              height: 70,
              width: "45%",
              borderWidth: 2,
              borderRadius: 5
            }}
          >
            <Text>Paid</Text>
            <Text>5600</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
