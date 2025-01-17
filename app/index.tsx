import React, { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, StatusBar, View } from "react-native";
import RecordsScreen from "./src/screens/RecordsScreen";

import useFonts from "../app/hooks/useFonts";
import HealthProfile from "./src/screens/HealthProfile";
import RewardPage from "./src/screens/RewardPage";
import HomePage from "./src/screens/HomePage";
import UploadPage from "./src/screens/UploadPage";

export default function Index() {
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
  return <RewardPage />;
  // return <HomePage />;
  // return <UploadPage />;
}
