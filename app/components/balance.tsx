import React from "react";
import { View, Text } from "react-native";

export default function BalanceComponent() {
  return (
    <View
      style={{
        shadowColor: "gray",
        shadowOpacity: 10,
        borderColor: "green",
        borderWidth: 2,
        borderRadius: 5,
        padding: 5
      }}
    >
      <Text>Hi Hlalele Maroba</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: "48%" }}>
          <Text style={{ fontSize: 16, fontWeight: 500, color: "gray" }}>
            Available Balance
          </Text>

          <Text style={{ fontSize: 24, fontWeight: 400 }}>M 2500.00</Text>
        </View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: 500, color: "gray" }}>
            Total Deposit
          </Text>

          <Text style={{ fontSize: 24, fontWeight: 400 }}>M 400.00</Text>
        </View>
      </View>
    </View>
  );
}
