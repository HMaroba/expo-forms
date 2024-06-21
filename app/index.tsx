// import { styles } from "@/styles/styles";
// import { Link, router } from "expo-router";
// import React from "react";
// import { Text, View, TouchableOpacity } from "react-native";

// export default function HomePage() {

//   const register = () => {
//     router.push('/register');
//   }

//   const login = () => {
//     router.push('/login');
//   }
//   return (
//     <View style={styles.container}>
//       <Text style={{width: '100%', fontSize: 28, textAlign: 'end'}}>Lebelo</Text>
//       <Link href="/register" style={{width: '100%', fontSize: 20, textAlign: 'center'}}>Register now </Link>
//       <TouchableOpacity style={styles.button} onPress={()=> login()}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={()=> register()}>
//         <Text style={styles.buttonText}>Register</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

import { styles } from "@/styles/styles";
import { Link, router } from "expo-router";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default function HomePage() {
  const register = () => {
    router.push("/register");
  };

  const login = () => {
    router.push("/login");
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ width: "100%", fontSize: 28, textAlign: "center" }}>
          Welcome
        </Text>
      </View>
      <View style={{ paddingBottom: 20 }}>
        <Link
          href="/register"
          style={{ fontSize: 20, textAlign: "center", marginBottom: 20 }}
        >
          -
        </Link>
        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={register}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
