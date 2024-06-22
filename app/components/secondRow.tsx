import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome5 from "@expo/vector-icons/build/FontAwesome5";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function SecondRow() {
  const login = () => {
    router.push("/screens/dashboard/transactions");
  };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 20,
      }}
    >
      <View
        style={{
          backgroundColor: "green",
          width: "25%",
          height: 75,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
       
        <FontAwesome5 name="money-check" size={40} color="white" />
        <Text style={{color: 'white', fontSize: 17}}>Loans</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          width: "25%",
          height: 75,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome5 name="wallet" size={40} color="white" />
        <Text style={{color: 'white', fontSize: 17}}>Savings</Text>
      </View>
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
        <FontAwesome5 name="user" size={40} color="white" />
        <Text style={{color: 'white', fontSize: 17}}>Profile</Text>
        {/* <Text>Send Money</Text> */}
      </TouchableOpacity>
    </View>
  );
}
