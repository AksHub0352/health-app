import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

interface UploadOptionProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onPress?: () => void;
}

const UploadOption: React.FC<UploadOptionProps> = ({
  icon,
  title,
  subtitle,
  onPress,
}) => (
  <TouchableOpacity style={styles.optionButton} onPress={onPress}>
    <View style={styles.iconContainer}>{icon}</View>
    <Text style={styles.optionTitle}>{title}</Text>
    <Text style={styles.optionSubtitle}>{subtitle}</Text>
  </TouchableOpacity>
);

export default UploadOption;

const styles = StyleSheet.create({
  optionButton: {
    width: "48%",
    backgroundColor: "#3a3a3a",
    borderRadius: 12,
    padding: 16,
    alignItems: "flex-start",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  optionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  optionSubtitle: {
    color: "#999",
    fontSize: 12,
  },
});
