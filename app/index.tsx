import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RecordsScreen from "./(home)/RecordsScreen";

import useFonts from "../app/hooks/useFonts";
import HealthProfile from "./(home)/HealthProfile";
import RewardPage from "./src/screens/RewardPage";
import HomePage from "./(home)/HomePage";
import UploadPage from "./src/screens/UploadPage";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  // const [fontsLoaded, setFontsLoaded] = useState(false);
  // useEffect(() => {
  //   const loadFonts = async () => {
  //     await useFonts();
  //     setFontsLoaded(true);
  //   };
  //   loadFonts();
  // }, []);
  // if (!fontsLoaded) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //       <ActivityIndicator size="large" color="#000" />
  //     </View>
  //   );
  // }
  // return <RecordsScreen />;
  // return <HealthProfile />;
  // return <RewardPage />;
  // return <HomePage />;
  // return <UploadPage />;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/(home)/HomePage")}
      >
        <Text style={styles.buttonText}>Go to HomePage</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
