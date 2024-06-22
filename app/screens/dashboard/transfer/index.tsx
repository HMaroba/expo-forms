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
    <SafeAreaProvider style={styles.container}>
      <View style={{ paddingTop: insets.top }}>
   
        <Text>Phone Number *</Text>
        <TextInput style={styles.input} placeholder="56781234" keyboardType='number-pad' />
        <Text>Amount *</Text>
        <TextInput
          style={styles.input}
          placeholder="Amount"
          keyboardType='number-pad'
       
        />
   
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
  
      </View>
    </SafeAreaProvider>
  );
}
