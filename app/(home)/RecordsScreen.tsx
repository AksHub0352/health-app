import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Header from "../src/components/Header";
import FilterButton from "../src/components/FilterButton";
import RecordCard from "../src/components/RecordCard";
import { RecordCardProps } from "../types";

const RecordsScreen = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<string>("");
  const [selectedDisease, setSelectedDisease] = useState<string>("");
  const [selectedRecordType, setSelectedRecordType] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("2023");

  const records: RecordCardProps[] = [
    {
      date: "Dec 5th",
      title: "MRI - Brain",
      doctor: "Dr. Surabhi Anand",
      type: "Imaging",
      findings: [
        "This MRI of the brain reveals no significant abnormalities or pathologies.",
      ],
      viewReport: true,
    },
    {
      date: "Dec 5th",
      title: "MRI - Brain",
      doctor: "Dr. Surabhi Anand",
      type: "Labs",
      findings: [
        "This MRI of the brain reveals no significant abnormalities or pathologies.",
      ],
      viewReport: true,
    },
    {
      date: "Dec 5th",
      title: "MRI - Brain",
      doctor: "Dr. Surabhi Anand",
      type: "Outpatient",
      findings: [
        "This MRI of the brain reveals no significant abnormalities or pathologies.",
      ],
      viewReport: true,
    },
    {
      date: "Dec 5th",
      title: "MRI - Brain",
      doctor: "Dr. Surabhi Anand",
      type: "Genetic Testing",
      findings: [
        "This MRI of the brain reveals no significant abnormalities or pathologies.",
      ],
      viewReport: true,
    },
    {
      date: "Dec 5th",
      title: "MRI - Brain",
      doctor: "Dr. Surabhi Anand",
      type: "Pathology",
      findings: [
        "This MRI of the brain reveals no significant abnormalities or pathologies.",
      ],
      viewReport: true,
    },
    {
      date: "Dec 5th",
      title: "MRI - Brain",
      doctor: "Dr. Surabhi Anand",
      type: "Procedure",
      findings: [
        "This MRI of the brain reveals no significant abnormalities or pathologies.",
      ],
      viewReport: true,
    },
    {
      date: "Dec 5th",
      title: "MRI - Brain",
      doctor: "Dr. Surabhi Anand",
      type: "Hospitalization",
      findings: [
        "This MRI of the brain reveals no significant abnormalities or pathologies.",
      ],
      viewReport: true,
    },
  ];

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.filterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FilterButton
            label="Doctor"
            isSelected={!!selectedDoctor}
            onPress={() => {}}
          />
          <FilterButton
            label="Disease"
            isSelected={!!selectedDisease}
            onPress={() => {}}
          />
          <FilterButton
            label="Records Type"
            isSelected={!!selectedRecordType}
            onPress={() => {}}
          />
        </ScrollView>
      </View>

      <ScrollView style={styles.recordList}>
        {records.map((record, index) => (
          <RecordCard key={index} {...record} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    marginTop: 46,
  },
  filterContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  recordList: {
    paddingHorizontal: 1,
  },
});

export default RecordsScreen;
