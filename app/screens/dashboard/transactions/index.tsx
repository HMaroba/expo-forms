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
  const TRansactions = [
    {
      name : 'Hlalele',
      amount : 560,
      type : 'received'
    },
    {
      name : 'Hlalele',
      amount : 560,
      type : 'received'
    },
    {
      name : 'Maroba',
      amount : 1000,
      type : 'sent'
    },
    {
      name : 'Hlalele',
      amount : 560,
      type : 'received'
    }
  ]
  return (
    <SafeAreaProvider style={styles.container2}>
      <View style={{ paddingTop: insets.top }}>
        <Text style={{ fontSize: 16, fontWeight: 500, color: "green" }}>
         Available Balance
        </Text>

        <Text style={{ fontSize: 24, fontWeight: 500 }}>M 2500.00</Text>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={{
              marginTop: 10,
              padding: 5,
              height: 70,
              width: "45%",
              borderWidth: 2,
              borderRadius: 5,
              borderColor: "4FA64F",
              backgroundColor: "4FA64F",
            }}
          >
            <Text style={{ fontSize: 28, fontWeight: 400, color: "white" }}>
              5600
            </Text>
            <Text>Received</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 10,
              padding: 5,
              height: 70,
              width: "45%",
              borderWidth: 2,
              borderRadius: 5,
              backgroundColor: '#FFFDD0',
              borderColor: '#FFFDD0'
            }}
          >
            <Text style={{ fontSize: 28, fontWeight: 400}}>
              5600
            </Text>
            <Text>Paid</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
