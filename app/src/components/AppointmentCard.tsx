import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AppointmentCard: React.FC = () => (
  <View style={styles.appointmentCard}>
    <Text style={styles.dateText}>01 Dec, Tue</Text>
    <View style={styles.appointmentContent}>
      <View style={styles.appointmentHeader}>
        <View style={styles.doctorInfo}>
          <Image
            source={require("../../../assets/images/image1.png")}
            style={styles.doctorImage}
          />
          <View style={styles.doctorDetails}>
            <Text style={styles.doctorName}>Dr. Surabhi Anand</Text>
            <Text style={styles.speciality}>Cardiologist</Text>
            <Text style={styles.consultationType}>In-Person Consultation</Text>
          </View>
        </View>
        <View style={styles.statusContainer}>
          <View style={styles.upcomingBadge}>
            <View style={styles.upcomingDot} />
            <Text style={styles.upcomingText}>Upcoming</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={20} color="#666" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.appointmentFooter}>
        <View style={styles.timeContainer}>
          <Ionicons name="time-outline" size={16} color="#666" />
          <Text style={styles.timeText}>04:00 PM</Text>
        </View>
        <View style={styles.tokenContainer}>
          <Text style={styles.tokenLabel}>Token No. : </Text>
          <View style={styles.tokenBadge}>
            <Text style={styles.tokenNumber}>57</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  appointmentCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dateText: { color: "#007AFF", marginBottom: 12 },
  appointmentContent: { gap: 12 },
  appointmentHeader: { flexDirection: "row", justifyContent: "space-between" },
  doctorInfo: { flexDirection: "row", gap: 12 },
  doctorImage: { width: 60, height: 60, borderRadius: 30 },
  doctorDetails: { gap: 4 },
  doctorName: { fontSize: 16, fontWeight: "bold" },
  speciality: { color: "#666" },
  consultationType: { color: "#007AFF" },
  statusContainer: { flexDirection: "row", alignItems: "flex-start", gap: 8 },
  upcomingBadge: { flexDirection: "row", alignItems: "center", gap: 4 },
  upcomingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#4CAF50",
  },
  upcomingText: { color: "#4CAF50" },
  appointmentFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timeContainer: { flexDirection: "row", alignItems: "center", gap: 4 },
  tokenContainer: { flexDirection: "row", alignItems: "center" },
  tokenBadge: {
    backgroundColor: "#007AFF",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  tokenNumber: { color: "#fff", fontWeight: "bold" },
});

export default AppointmentCard;
