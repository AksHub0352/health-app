import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

interface DoctorCardProps {
  name: string;
  qualifications: string;
  image: any;
  clinic: string;
  location: string;
  experience: number;
  rating: number;
  patients: number;
  consultationFee: number;
  onPress: () => void;
  onBookPress: () => void;
  onMenuPress: () => void;
}

const DoctorListCard: React.FC<DoctorCardProps> = ({
  name,
  qualifications,
  image,
  clinic,
  location,
  experience,
  rating,
  patients,
  consultationFee,
  onPress,
  onBookPress,
  onMenuPress,
}) => (
  <View style={styles.card}>
    <View style={styles.header}>
      <View style={styles.mainInfo}>
        <Image source={image} style={styles.doctorImage} />
        <View style={styles.doctorInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.qualifications}>{qualifications}</Text>
          <View style={styles.location}>
            <MaterialIcons name="location-on" size={16} color="#4A90E2" />
            <Text style={styles.clinicText}>
              {clinic}, {location}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={onMenuPress}>
        <MaterialIcons name="more-vert" size={24} color="#000" />
      </TouchableOpacity>
    </View>

    <View style={styles.stats}>
      <View style={styles.statItem}>
        <MaterialIcons name="business-center" size={16} color="#4A90E2" />
        <Text style={styles.statText}>
          <Text style={styles.statHighlight}>{experience} yrs</Text> experience
        </Text>
      </View>
      <View style={styles.statDivider} />
      <View style={styles.statItem}>
        <MaterialIcons name="thumb-up" size={16} color="#4A90E2" />
        <Text style={styles.statText}>
          <Text style={styles.statHighlight}>{rating}</Text> rating
        </Text>
      </View>
      <View style={styles.statDivider} />
      <View style={styles.statItem}>
        <MaterialIcons name="people" size={16} color="#4A90E2" />
        <Text style={styles.statText}>
          <Text style={styles.statHighlight}>{patients}k+</Text> Patients
        </Text>
      </View>
    </View>

    <View style={styles.footer}>
      <View>
        <Text style={styles.price}>Rs. {consultationFee}</Text>
        <Text style={styles.consultationText}>Consultation Fee</Text>
      </View>
      <TouchableOpacity style={styles.bookButton} onPress={onBookPress}>
        <Text style={styles.bookButtonText}>Book Slot</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  mainInfo: {
    flexDirection: "row",
    flex: 1,
  },
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  doctorInfo: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
  },
  qualifications: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  clinicText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 4,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#E5E5E5",
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  statText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#666",
  },
  statHighlight: {
    color: "#000",
    fontWeight: "600",
  },
  statDivider: {
    width: 1,
    height: 24,
    backgroundColor: "#E5E5E5",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  consultationText: {
    fontSize: 14,
    color: "#666",
  },
  bookButton: {
    backgroundColor: "#4A90E2",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
  },
  bookButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default DoctorListCard;
