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
      }}
    >
      <TouchableOpacity
        onPress={() => sendMoney()}
        style={{
          backgroundColor: "green",
          width: "25%",
          height: 75,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome5 name="money-check" size={30} color="white" />
        <Text style={{ color: "white", fontSize: 14 }}>Payments</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => withdrawMoney()}
        style={{
          backgroundColor: "green",
          width: "25%",
          height: 75,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome5 name="wallet" size={30} color="white" />
        <Text style={{ color: "white", fontSize: 14 }}>Savings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => login()}
        style={{
          backgroundColor: "green",
          width: "25%",
          height: 75,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome5 name="list" size={30} color="white" />
        <Text style={{ color: "white", fontSize: 14 }}>History</Text>
        {/* <Text>Send Money</Text> */}
      </TouchableOpacity>
    </View>
  );
}
