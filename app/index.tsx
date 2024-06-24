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
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";

export default function HomePage() {
  const login = () => {
    router.push("/login");
  };

  //const image = {uri: 'https://static.vecteezy.com/system/resources/previews/010/945/926/non_2x/green-background-simple-flat-full-of-dimensional-lines-free-vector.jpg'};
  const image = { uri: "https://docs.expo.dev/static/images/tutorial/background-image.png" };
  return (
    <View style={styles.container3}>
          <ImageBackground source={image} style={styles.image} >
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text
          style={{
            width: "100%",
            fontSize: 28,
            textAlign: "center",
            color: "white",
          }}
        >
          Welcome
        </Text>
      </View>

      <Text
        style={{
          fontSize: 34,
          fontWeight: 400,
          textAlign: "center",
          color: "white",
        }}
      >
        Easy way to manage money
      </Text>
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          paddingTop: 20,
          color: "white",
        }}
      >
        Lets transfer and receive your money with easy way ...
      </Text>
      <View style={{ paddingBottom: 20 }}>
        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
}
