import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { View, Text } from "react-native";

type IconProps = {
  iconName?: any;
  title: string;
};

export default function CardInfo({ iconName, title }: IconProps) {

    const IconComponent = Ionicons;
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
      <IconComponent name={iconName} size={30} color="white" />
      <Text style={{ color: "white", fontSize: 14 , paddingTop: 2}}>{title}</Text>
    </View>
  );
}
