import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type IconProps = {
  iconName?: any;
  title: string;
  link?: any;
};

export default function CardInfo({ iconName, title, link }: IconProps) {
  const IconComponent = Ionicons;
  const login = () => {
    router.push(link);
  };
  return (
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
      <IconComponent name={iconName} size={30} color="white" />
      <Text style={{ color: "white", fontSize: 14, paddingTop: 2 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
