import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type IconProps = {
  iconName?: any;
  title: string;
};

export default function OutlineCardInfo({ iconName, title }: IconProps) {

    const IconComponent = Ionicons;
  return (
    <TouchableOpacity
      style={{
      
        width: "25%",
        height: 75,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        borderColor: 'green',
        borderWidth: 2,
      }}
    >
      <IconComponent name={iconName} size={30} color="green" />
      <Text style={{ color: "white", fontSize: 14 , paddingTop: 2}}>{title}</Text>
    </TouchableOpacity>
  );
}
