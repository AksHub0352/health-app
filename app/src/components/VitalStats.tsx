import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";

interface Vital {
  label: string;
  value: string;
  unit: string;
  icon: ImageSourcePropType;
}

interface VitalStatsProps {
  style?: object;
}

const VitalStats: React.FC<VitalStatsProps> = ({ style }) => {
  const vitals: Vital[] = [
    {
      label: "Heart Rate",
      value: "64",
      unit: "bpm",
      icon: require("../../../assets/images/image1.png"),
    },
    {
      label: "Blood Pressure",
      value: "140/90",
      unit: "mmHg",
      icon: require("../../../assets/images/image1.png"),
    },
    {
      label: "Respiratory Rate",
      value: "16",
      unit: "bpm",
      icon: require("../../../assets/images/image1.png"),
    },
    {
      label: "Body Temperature",
      value: "98.6",
      unit: "°F",
      icon: require("../../../assets/images/image1.png"),
    },
    {
      label: "O2 Saturation",
      value: "95/100",
      unit: "",
      icon: require("../../../assets/images/image1.png"),
    },
    {
      label: "Body Mass Index",
      value: "26.7",
      unit: "",
      icon: require("../../../assets/images/image1.png"),
    },
  ];

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>Body Vitals Summary</Text>
      <View style={styles.grid}>
        {vitals.map((vital, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.iconLabel}>
              <Image source={vital.icon} style={styles.icon} />
              <Text style={styles.label}>{vital.label}</Text>
            </View>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>{vital.value}</Text>
              {vital.unit ? (
                <Text style={styles.unit}>{vital.unit}</Text>
              ) : null}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "white",
    borderRadius: 12,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#4285F4",
    marginBottom: 4,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 8,
  },
  card: {
    backgroundColor: "#F8F9FD",
    borderRadius: 8,
    padding: 16,
    width: "48%", // Allows for 2 columns with gap
  },
  iconLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  label: {
    color: "#4A5568",
    fontSize: 14,
  },
  valueContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 4,
  },
  value: {
    color: "#4169E1",
    fontSize: 20,
    fontWeight: "600",
  },
  unit: {
    color: "#718096",
    fontSize: 12,
  },
});

export default VitalStats;
