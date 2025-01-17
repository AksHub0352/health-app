import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
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
      <Text style={isSelected ? styles.textSelected : styles.textUnselected}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    borderWidth: 1,
  },
  buttonSelected: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
  },
  buttonUnselected: {
    borderColor: "#ccc",
  },
  textSelected: {
    color: "#fff",
  },
  textUnselected: {
    color: "#555",
  },
});

export default FilterButton;
