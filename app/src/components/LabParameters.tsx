import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Parameter = {
  name: string;
  currentValue: number;
  previousValue: number;
  unit: string;
  status: "Low" | "Normal" | "High";
  date: string;
  previousDate: string;
  range: {
    min: number;
    max: number;
  };
};

const RangeIndicator = ({ value, range, width = "100%" }) => {
  const percentage = ((value - range.min) / (range.max - range.min)) * 100;

  return (
    <View style={[styles.rangeContainer, { width }]}>
      <View style={styles.rangeLine}>
        <View style={styles.rangeBackground} />
        <View
          style={[
            styles.rangeIndicator,
            { left: `${Math.max(0, Math.min(100, percentage))}%` },
          ]}
        />
      </View>
      <View style={styles.rangeLabels}>
        <Text style={styles.rangeValue}>{range.min}</Text>
        <Text style={styles.rangeValue}>{range.max}</Text>
      </View>
    </View>
  );
};

export default function LabParameters() {
  const parameters: Parameter[] = [
    {
      name: "Thyroxine (T4)",
      currentValue: 3.9,
      previousValue: 3,
      unit: "ug/dL",
      status: "Low",
      date: "01 Dec'23",
      previousDate: "01 Sep'23",
      range: {
        min: 4.5,
        max: 12.0,
      },
    },
    {
      name: "Hemoglobin (Hb)",
      currentValue: 10.9,
      previousValue: 13.9,
      unit: "g/dL",
      status: "Low",
      date: "01 Dec'23",
      previousDate: "01 Sep'23",
      range: {
        min: 12.0,
        max: 18.0,
      },
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lab Parameters</Text>
      <Text style={styles.subtitle}>Parameters that need your attention</Text>

      {parameters.map((param, index) => (
        <View key={index} style={styles.parameterCard}>
          <View style={styles.headerRow}>
            <View>
              <Text style={styles.parameterName}>{param.name}</Text>
              <Text style={styles.unitText}>Units : {param.unit}</Text>
            </View>
            <View style={styles.statusContainer}>
              <View style={styles.statusDot} />
              <Text style={styles.statusText}>{param.status}</Text>
            </View>
          </View>

          <View style={styles.valueContainer}>
            <Text style={styles.currentValue}>
              {param.currentValue} {param.unit}
            </Text>
            <Text style={styles.dateText}>{param.date}</Text>
          </View>

          <RangeIndicator value={param.currentValue} range={param.range} />

          <View style={styles.previousValueContainer}>
            <Text style={styles.previousValueText}>
              Previous Value : {param.previousValue} {param.unit}
            </Text>
            <Text style={styles.previousDateText}>{param.previousDate}</Text>
          </View>
        </View>
      ))}

      <Pressable style={styles.viewAllButton}>
        <Text style={styles.viewAllText}>View all</Text>
        <Ionicons name="chevron-forward" size={16} color="#4285F4" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#4285F4",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
  },
  parameterCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  parameterName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 4,
  },
  unitText: {
    fontSize: 14,
    color: "#666",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ff6b6b",
    marginRight: 4,
  },
  statusText: {
    fontSize: 14,
    color: "#ff6b6b",
    fontWeight: "500",
  },
  valueContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 16,
  },
  currentValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ff6b6b",
    marginRight: 8,
  },
  dateText: {
    fontSize: 12,
    color: "#666",
  },
  rangeContainer: {
    marginBottom: 12,
  },
  rangeLine: {
    height: 4,
    backgroundColor: "#E0E0E0",
    borderRadius: 2,
    marginBottom: 8,
    position: "relative",
  },
  rangeBackground: {
    position: "absolute",
    left: "25%",
    right: "0%",
    height: "100%",
    backgroundColor: "#4285F4",
    borderRadius: 2,
  },
  rangeIndicator: {
    position: "absolute",
    width: 16,
    height: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#ff6b6b",
    marginLeft: -8,
    top: -6,
  },
  rangeLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rangeValue: {
    fontSize: 12,
    color: "#666",
  },
  previousValueContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  previousValueText: {
    fontSize: 14,
    color: "#666",
  },
  previousDateText: {
    fontSize: 12,
    color: "#666",
  },
  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  viewAllText: {
    fontSize: 16,
    color: "#4285F4",
    marginRight: 4,
  },
});
