

import EvilIcons from '@expo/vector-icons/EvilIcons'
import FontAwesome5 from '@expo/vector-icons/build/FontAwesome5'
import React from 'react'
import { Text, View } from 'react-native'

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
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <FontAwesome5 name="wallet" size={40} color="white" />
    </View>
    <View
      style={{
        backgroundColor: "green",
        width: "25%",
        height: 75,
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <FontAwesome5 name="wallet" size={40} color="white" />
    </View>
    <View
      style={{
        backgroundColor: "green",
        width: "25%",
        height: 75,
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
    
        <FontAwesome5 name="user" size={40} color="white" />
        {/* <Text>Send Money</Text> */}
    </View>
  </View>
  )
}
