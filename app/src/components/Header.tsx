import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="qrcode" size={24} color="#000" />
        <TextInput placeholder="Search" style={styles.searchInput} />
        <View style={styles.iconGroup}>
          <MaterialIcons name="search" size={24} color="#000" />
          <MaterialCommunityIcons name="bell-outline" size={24} color="#000" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  iconGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 60,
  },
  searchInput: {
    backgroundColor: "#f1f1f1",
    padding: 8,
    borderRadius: 8,
  },
});

export default Header;
