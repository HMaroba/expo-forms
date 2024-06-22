import { styles } from "@/styles/styles";
import { Link, router } from "expo-router";
import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import CardInfo from "@/app/components/card";
import SecondRow from "@/app/components/secondRow";

export default function Dashboard() {
  const insets = useSafeAreaInsets();
  const login = () => {
    router.push("/screens/dashboard/transactions");
  };
  return (
    <SafeAreaProvider style={styles.container}>
      <View style={{ paddingTop: insets.top }}>
        <Text style={{ fontSize: 16, fontWeight: 500, color: "green" }}>
          Available Balance
        </Text>

        <Text style={{ fontSize: 24, fontWeight: 500 }}>M 2500.00</Text>
        <Text style={{ fontSize: 34, marginBottom: 20, marginTop: 20 }}>
          Find your Monetary Finese
        </Text>

        <View style={{ flexDirection: "column", padding: 10 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CardInfo title="Send" iconName={"send"} />
            <CardInfo title="Withdraw" iconName={"wallet"} />
            <CardInfo title="Pay" iconName={"home"} />
          </View>

          <SecondRow />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send Money</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Withdraw</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Payments</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.button} onPress={() => login()}>
          <Text style={styles.buttonText}>Transactions</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}
