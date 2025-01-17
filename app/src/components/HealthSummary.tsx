import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";

type Status = "out_of_range" | "all_in_range" | "no_data";

interface Category {
  title: string;
  status: Status;
  count?: number;
  icon: ImageSourcePropType;
  lastUpdated: string;
}

interface HealthSummaryProps {
  style?: object;
}

const HealthSummary: React.FC<HealthSummaryProps> = ({ style }) => {
  const categories: Category[] = [
    {
      title: "Blood",
      status: "out_of_range",
      count: 2,
      icon: require("../../../assets/images/image1.png"),
      lastUpdated: "2 months ago",
    },
    {
      title: "Heart",
      status: "all_in_range",
      icon: require("../../../assets/images/image1.png"),
      lastUpdated: "2 months ago",
    },
    {
      title: "Kidney & Urine",
      status: "out_of_range",
      count: 1,
      icon: require("../../../assets/images/image1.png"),
      lastUpdated: "2 months ago",
    },
    {
      title: "Liver",
      status: "out_of_range",
      count: 1,
      icon: require("../../../assets/images/image1.png"),
      lastUpdated: "2 months ago",
    },
    {
      title: "Thyroid",
      status: "all_in_range",
      icon: require("../../../assets/images/image1.png"),
      lastUpdated: "2 months ago",
    },
    {
      title: "Sugar / Diabetes",
      status: "out_of_range",
      count: 1,
      icon: require("../../../assets/images/image1.png"),
      lastUpdated: "2 months ago",
    },
    {
      title: "Infections",
      status: "no_data",
      icon: require("../../../assets/images/image1.png"),
      lastUpdated: "2 months ago",
    },
    {
      title: "Pancreas",
      status: "no_data",
      icon: require("../../../assets/images/image1.png"),
      lastUpdated: "2 months ago",
    },
    {
      title: "Vitamins/Minerals",
      status: "out_of_range",
      count: 1,
      icon: require("../../../assets/images/image1.png"),
      lastUpdated: "2 months ago",
    },
    {
      title: "Anthropometry",
      status: "all_in_range",
      icon: require("../../../assets/images/image1.png"),
      lastUpdated: "2 months ago",
    },
  ];

  const getStatusColor = (status: Status) => {
    switch (status) {
      case "out_of_range":
        return "#FF4444";
      case "all_in_range":
        return "#4CAF50";
      case "no_data":
        return "#FFA500";
      default:
        return "#000000";
    }
  };

  const getStatusText = (category: Category) => {
    switch (category.status) {
      case "out_of_range":
        return `${category.count} out of Range`;
      case "all_in_range":
        return "All in range";
      case "no_data":
        return "No Data";
      default:
        return "";
    }
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>Health Summary</Text>
      <View style={styles.grid}>
        {categories.map((category, index) => (
          <View key={index} style={styles.categoryItem}>
            <Image source={category.icon} style={styles.icon} />
            <Text style={styles.categoryTitle}>{category.title}</Text>
            <View style={styles.statusContainer}>
              <View
                style={[
                  styles.statusDot,
                  { backgroundColor: getStatusColor(category.status) },
                ]}
              />
              <Text
                style={[
                  styles.status,
                  { color: getStatusColor(category.status) },
                ]}
              >
                {getStatusText(category)}
              </Text>
            </View>
            <Text style={styles.lastUpdated}>{category.lastUpdated}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
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
    gap: 12,
  },
  categoryItem: {
    backgroundColor: "#F8F9FD",
    borderRadius: 12,
    padding: 16,
    width: "48%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    width: 32,
    height: 32,
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000000",
    textAlign: "center",
    marginBottom: 8,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 4,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  status: {
    fontSize: 14,
    fontWeight: "500",
  },
  lastUpdated: {
    fontSize: 12,
    color: "#666666",
  },
});

export default HealthSummary;
