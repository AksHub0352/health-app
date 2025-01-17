import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface BottomNavProps {
  activeTab: string;
  onTabPress: (tab: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabPress }) => (
  <View style={styles.navContainer}>
    <TouchableOpacity
      onPress={() => onTabPress("home")}
      style={styles.navButton}
    >
      <Ionicons
        name={activeTab === "home" ? "home" : "home-outline"}
        size={24}
        color={activeTab === "home" ? "#007AFF" : "#666"}
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => onTabPress("appointments")}
      style={styles.navButton}
    >
      <Ionicons
        name={activeTab === "appointments" ? "calendar" : "calendar-outline"}
        size={24}
        color={activeTab === "appointments" ? "#007AFF" : "#666"}
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => onTabPress("profile")}
      style={styles.navButton}
    >
      <Ionicons
        name={activeTab === "profile" ? "person" : "person-outline"}
        size={24}
        color={activeTab === "profile" ? "#007AFF" : "#666"}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  navButton: { alignItems: "center" },
});

export default BottomNav;
