// Header.tsx
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AwardHeader: React.FC = () => (
  <View style={styles.header}>
    <TouchableOpacity>
      <Ionicons name="chevron-back" size={24} color="black" />
    </TouchableOpacity>
    <View style={styles.coinContainer}>
      <Image
        source={require("../../../assets/images/image1.png")}
        style={styles.coinIcon}
      />
      <Text>10 coins</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    paddingTop: 48,
  },
  coinContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  coinIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
});

export default AwardHeader;
