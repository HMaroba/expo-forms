import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome5 from "@expo/vector-icons/build/FontAwesome5";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function OutlineRow() {
  const login = () => {
    router.push("/screens/dashboard/transactions");
  };
  const sendMoney = () => {
    router.push("/screens/dashboard/payments");
  };
  const withdrawMoney = () => {
    router.push("/screens/dashboard/withdraw");
  };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <TouchableOpacity
        onPress={() => sendMoney()}
        style={{
          width: "30%",
          height: 50,
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          borderColor: "green",
          borderWidth: 2,
        }}
      >
        <FontAwesome5 name="money-check" size={20} color="green" />
        <Text style={{ color: "green", fontSize: 14 }}>Payments</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => withdrawMoney()}
        style={{
          width: "30%",
          height: 50,
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          borderColor: "green",
          borderWidth: 2,
        }}
      >
        <FontAwesome5 name="wallet" size={20} color="green" />
        <Text style={{ color: "green", fontSize: 14 }}>Savings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => login()}
        style={{
          width: "30%",
          height: 50,
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          borderColor: "green",
          borderWidth: 2,
        }}
      >
        <FontAwesome5 name="list" size={20} color="green" />
        <Text style={{ color: "green", fontSize: 14 }}>History</Text>
        {/* <Text>Send Money</Text> */}
      </TouchableOpacity>
    </View>
  );
}
