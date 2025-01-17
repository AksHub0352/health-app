// DoctorCard.tsx
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";

interface DoctorCardProps {
  name: string;
  speciality: string;
  image: ImageSourcePropType;
  onPress?: () => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  speciality,
  image,
  onPress,
}) => (
  <TouchableOpacity style={styles.doctorCard} onPress={onPress}>
    <Image source={image} style={styles.doctorImage} resizeMode="cover" />
    <Text style={styles.doctorName}>{name}</Text>
    <Text style={styles.doctorSpeciality}>{speciality}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  doctorCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
    width: 160,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 8,
  },
  doctorImage: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginBottom: 12,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
    marginBottom: 4,
  },
  doctorSpeciality: {
    fontSize: 14,
    color: "#4169E1",
    textAlign: "center",
  },
});

export default DoctorCard;
