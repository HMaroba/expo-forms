import { styles } from "@/styles/styles";
import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Register() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider style={styles.container}>
      <View style={{ paddingTop: insets.top }}>
        <Text>First Name</Text>
        <TextInput style={styles.input} placeholder="Name" />
        <Text>Email Address</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <Text>First Name</Text>
        <TextInput style={styles.input} placeholder="Name" />
        <Text>Email Address</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <Text>First Name</Text>
        <TextInput style={styles.input} placeholder="Name" />
        <Text>Email Address</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}
