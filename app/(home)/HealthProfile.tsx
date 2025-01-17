import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import HealthScore from "../src/components/HealthScore";
import VitalStats from "../src/components/VitalStats";
import HealthSummary from "../src/components/HealthSummary";
import ActivitySection from "../src/components/ActivitySection";
import LabParameters from "../src/components/LabParameters";
import Header from "../src/components/Header";

export default function HealthProfile() {
  return (
    <ScrollView style={styles.container}>
      <Header />
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
    marginTop: 46,
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
