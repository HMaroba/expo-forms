import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "white",
        },
        headerTintColor: "black",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 22,
        },
        headerTitleAlign: "center",
        headerShown: false,
      }}
    ></Stack>

    
  );
}
