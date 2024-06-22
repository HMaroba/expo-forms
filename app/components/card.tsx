import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { View } from "react-native";

type IconProps = {
  icons?: any;
};

export default function CardInfo({ icons }: IconProps) {
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
      <Feather name="home" size={40} color="white" />
    </View>
  );
}
