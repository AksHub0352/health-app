import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FilterButtonProps } from "../../types";

const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        isSelected ? styles.buttonSelected : styles.buttonUnselected,
      ]}
    >
      <View style={styles.buttonContent}>
        <Text style={isSelected ? styles.textSelected : styles.textUnselected}>
          {label}
        </Text>
        <MaterialIcons
          name="arrow-drop-down"
          size={20}
          color={isSelected ? "#007bff" : "#555"}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 100,
    marginHorizontal: 4,
  },
  buttonSelected: {
    borderColor: "#007bff",
  },
  buttonUnselected: {
    borderColor: "#007bff",
    backgroundColor: "#fff",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textSelected: {
    color: "#007bff",
    fontWeight: "500",
    marginRight: 4,
  },
  textUnselected: {
    color: "#555",
    fontWeight: "500",
    marginRight: 4,
  },
});

export default FilterButton;
