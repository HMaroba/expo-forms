import { styles } from "@/styles/styles";
import { Link, router } from "expo-router";
import React from "react";
import { View, TextInput, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CardInfo from "@/app/components/card";
import SecondRow from "@/app/components/secondRow";
import BalanceComponent from "@/app/components/balance";
import OutlineCardInfo from "@/app/components/oulineCard";
import ThirdRow from "@/app/components/thirdRow";

export default function Dashboard() {

  return (
    <SafeAreaProvider style={styles.container}>
      <View>
        <BalanceComponent />
 
        <Text style={{ fontSize: 34, marginBottom: 20, marginTop: 20 }}>
          Find your Monetary Finese
        </Text>

        <View style={{ flexDirection: "column", padding: 10 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CardInfo title="Send" iconName={"send"} />
            <CardInfo title="Withdraw" iconName={"wallet"} />
            <CardInfo title="Pay" iconName={"home"} />
          </View>

          <SecondRow />
          <ThirdRow />
        </View>

        <View style={{ flexDirection: "row" , marginTop: 32}}>
          <Text style={{ fontSize: 18 }}>Yesterday</Text>
          <Link
            href={"/screen/dashboard/transactions"}
            style={{ marginLeft: "auto", fontSize: 18, color: "blue" }}
          >
            Sell All
          </Link>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            borderColor: "green",
            borderWidth: 2,
            borderRadius: 5,
            padding: 10,
          }}
        >
        <View>
        <Text style={{ fontSize: 16 }}>Hlalele</Text>
        <Text style={{ fontSize: 16 }}>20 May 2024</Text>
        </View>
          <Text style={{ fontSize: 16, marginLeft: "auto", fontWeight: 600 }}>LSL 200.99</Text>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
