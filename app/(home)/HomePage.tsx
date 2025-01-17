import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import AppointmentCard from "../src/components/AppointmentCard";
import DoctorCard from "../src/components/DoctorCard";
import CategoryCard from "../src/components/CategoryCard";
import DoctorListCard from "../src/components/DoctorListCard";
import BottomNav from "../src/components/BottomNav";
import Header from "../src/components/Header";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Appointments</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View all</Text>
            </TouchableOpacity>
          </View>
          <AppointmentCard />
        </View>

        <View style={styles.section}>
          <View style={styles.header}>
            <Text style={styles.title}>My Doctors</Text>
            <TouchableOpacity onPress={() => console.log("View all doctors")}>
              <View style={styles.viewAllContainer}>
                <Text style={styles.viewAllText}>View all</Text>
                <Text style={styles.viewAllArrow}>›</Text>
              </View>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <DoctorCard
              name="Dr. Sharad Shetty"
              speciality="Cardiologist"
              image={require("../../assets/images/image1.png")}
              onPress={() => console.log("Doctor pressed")}
            />
            <DoctorCard
              name="Dr. Anand Gupta"
              speciality="Dermatologist"
              image={require("../../assets/images/image1.png")}
              onPress={() => console.log("Doctor pressed")}
            />
            <DoctorCard
              name="Dr. Anand Gupta"
              speciality="Dermatologist"
              image={require("../../assets/images/image1.png")}
              onPress={() => console.log("Doctor pressed")}
            />
          </ScrollView>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Book an Appointment</Text>
          <Text style={styles.categoriesTitle}>Categories</Text>
          <View style={styles.categoriesGrid}>
            <CategoryCard
              icon={require("../../assets/images/image1.png")}
              label="Dentist"
              onPress={() => console.log("Category pressed")}
            />
            <CategoryCard
              icon={require("../../assets/images/image1.png")}
              label="Dermatology"
              onPress={() => console.log("Category pressed")}
            />
            <CategoryCard
              icon={require("../../assets/images/image1.png")}
              label="Pediatrics"
              onPress={() => console.log("Category pressed")}
            />
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Doctors Near you</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View all</Text>
            </TouchableOpacity>
          </View>
          <DoctorListCard
            name="Dr. Aravind Prasad"
            qualifications="Dermatologist | MBBS, DDVL,FAM"
            image={require("../../assets/images/image1.png")}
            clinic="Aster Prime Clinic"
            location="Ameerpet"
            experience={15}
            rating={4.5}
            patients={3}
            consultationFee={700}
            onPress={() => {}}
            onBookPress={() => {}}
            onMenuPress={() => {}}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f9fa", marginTop: 36 },
  scrollView: { flex: 1 },
  section: { padding: 16, marginTop: 36 },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: { fontSize: 20, fontWeight: "bold" },
  viewAll: { color: "#007AFF" },
  categoriesTitle: { fontSize: 16, marginBottom: 12 },
  categoriesGrid: { flexDirection: "row", flexWrap: "wrap", gap: 16 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000",
  },
  viewAllContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewAllText: {
    fontSize: 16,
    color: "#4169E1",
    marginRight: 4,
  },
  viewAllArrow: {
    fontSize: 16,
    color: "#4169E1",
  },
});
