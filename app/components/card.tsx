import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { View } from "react-native";

type Icon = {
  icons: any;
};

export default function CardInfo({ icons }: Icon) {
  return (
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
      <Feather name={icons} size={40} color="white" />
    </View>
  );
}
