

import EvilIcons from '@expo/vector-icons/EvilIcons'
import React from 'react'
import { View } from 'react-native'

export default function SecondRow() {
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
      <EvilIcons name="credit-card" size={55} color="white" />
    </View>
    <View
      style={{
        backgroundColor: "green",
        width: "25%",
        height: 75,
        borderRadius: 10,
      }}
    >
        <EvilIcons name="credit-card" size={55} color="white" />
    </View>
    <View
      style={{
        backgroundColor: "green",
        width: "25%",
        height: 75,
        borderRadius: 10,
      }}
    >
        <EvilIcons name="credit-card" size={55} color="white" />
    </View>
  </View>
  )
}
