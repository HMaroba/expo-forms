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
    <View
      style={{
        width: "25%",
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "green",
        borderWidth: 2,
      }}
    >
      <IconComponent name={iconName} size={20} color="green" />
      <Text style={{ color: "green", fontSize: 14, paddingTop: 2 }}>
        {title}
      </Text>
    </View>
  );
}
