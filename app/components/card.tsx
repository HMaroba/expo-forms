import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { View, Text } from "react-native";

type IconProps = {
  icons?: any;
  title: string;
};

export default function CardInfo({ icons, title }: IconProps) {
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
      <Text style={{ color: "white", fontSize: 17 , paddingTop: 2}}>{title}</Text>
    </View>
  );
}
