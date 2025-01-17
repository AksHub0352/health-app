import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import HealthScore from "../components/HealthScore";
import VitalStats from "../components/VitalStats";
import HealthSummary from "../components/HealthSummary";
import ActivitySection from "../components/ActivitySection";
import LabParameters from "../components/LabParameters";

export default function HealthProfile() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Health Profile</Text>
      </View>
      <HealthScore score={70} />
      <VitalStats />
      <HealthSummary />
      <ActivitySection />
      <LabParameters />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
  },
  header: {
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e1e1e1",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "600",
  },
});
