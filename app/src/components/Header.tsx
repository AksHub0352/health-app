import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="qrcode-scan" size={28} color="#000" />
        <View style={styles.searchWrapper}>
          <MaterialIcons
            name="search"
            size={20}
            color="#000"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#666"
            style={styles.searchInput}
          />
          <MaterialIcons
            name="mic"
            size={20}
            color="#000"
            style={styles.micIcon}
          />
        </View>
        <MaterialCommunityIcons name="bell-outline" size={28} color="#000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 24,
    marginHorizontal: 12,
    paddingHorizontal: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 6,
    color: "#000",
  },
  searchIcon: {
    marginRight: 6,
  },
  micIcon: {
    marginLeft: 6,
  },
});

export default Header;
