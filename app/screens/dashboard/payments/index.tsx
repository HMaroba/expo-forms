import OutlineRow from "@/app/components/outlinedRow";
import { styles } from "@/styles/styles";
import { Link } from "expo-router";
import React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Paymnets() {
  const insets = useSafeAreaInsets();
  const TRansactions = [
    {
      name: "Hlalele",
      amount: 560,
      type: "received",
    },
    {
      name: "Hlalele",
      amount: 560,
      type: "received",
    },
    {
      name: "Maroba",
      amount: 1000,
      type: "sent",
    },
    {
      name: "Maroba",
      amount: 1000,
      type: "sent",
    },
  ];
  return (
    <SafeAreaProvider style={styles.container2}>
      <View style={{ paddingTop: insets.top }}>
        <Text style={{ fontSize: 16, fontWeight: 500, color: "green" }}>
          Available Balance
        </Text>

        <Text style={{ fontSize: 24, fontWeight: 500 }}>M 2500.00</Text>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={{
              marginTop: 10,
              padding: 5,
              height: 70,
              width: "45%",
              borderWidth: 2,
              borderRadius: 5,
              borderColor: "#4FA64F",
              backgroundColor: "#4FA64F",
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: 400, color: "white" }}>
              LSL 5600.00
            </Text>
            <Text style={{ color: "white" }}>Received</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 10,
              padding: 5,
              height: 70,
              width: "45%",
              borderWidth: 2,
              borderRadius: 5,
              borderColor: "#4FA64F",
              backgroundColor: "#4FA64F",
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: 400, color: "white" }}>
              LSL 600.00
            </Text>
            <Text style={{ color: "white" }}>Paid</Text>
          </TouchableOpacity>
        </View>

        <OutlineRow />

        <View>
          <Text style={{ fontSize: 20, paddingTop: 10 }}>
            Recent Transactions
          </Text>
          <ScrollView style={{ marginBottom: 100, height: 450 }}>
            <View>
              {TRansactions.map((item: any, index: number) => (
                <View key={index}>
                <View
                  
                  style={{
                    // borderWidth: 2,
                    // borderColor: "green",
                    // borderRadius: 5,
                    marginTop: 10,
                    padding: 5,
                    flexDirection: "row",
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 18 }}>{item.name}</Text>
                    <Text style={{ fontSize: 14, color: 'gray' }}>{item.type}</Text>
                  </View>
                  <View style={{ marginLeft: "auto" }}>
                    <Text style={{ fontSize: 18, fontWeight: 600 }}>
                      LSL {item.amount}
                    </Text>
                  </View>
                  
                </View>
                <View style={{flex: 1, height: 2, backgroundColor: 'gray'}} />
                </View>
                
              ))}
         
            
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
