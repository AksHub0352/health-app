// CategoryCard.tsx
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";

interface CategoryCardProps {
  icon: ImageSourcePropType;
  label: string;
  onPress?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  icon,
  label,
  onPress,
}) => (
  <TouchableOpacity style={styles.categoryCard} onPress={onPress}>
    <Image source={icon} style={styles.categoryIcon} resizeMode="contain" />
    <Text style={styles.categoryLabel}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  categoryCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    width: "22%",
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  categoryIcon: {
    width: 32,
    height: 32,
    marginBottom: 8,
  },
  categoryLabel: {
    fontSize: 8,
    color: "#000",
    textAlign: "center",
  },
});

export default CategoryCard;
