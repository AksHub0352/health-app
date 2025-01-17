import * as Font from "expo-font";

const useFonts = async () => {
  await Font.loadAsync({
    "Gelion-Regular": require("../assets/fonts/Gelion-Regular.otf"),
    "Gelion-Medium": require("../assets/fonts/Gelion-Medium.otf"),
    "Gelion-Bold": require("../assets/fonts/Gelion-Bold.otf"),
  });
};

export default useFonts;
