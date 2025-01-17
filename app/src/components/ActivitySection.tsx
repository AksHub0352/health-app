import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ActivityMetricCard = ({
  icon,
  title,
  value,
  illustration,
}: {
  icon: string;
  title: string;
  value: string;
  illustration?: React.ReactNode;
}) => (
  <View style={styles.metricCard}>
    <View style={styles.metricHeader}>
      <MaterialCommunityIcons name={icon} size={24} color="#000" />
      <Text style={styles.metricTitle}>{title}</Text>
    </View>
    {illustration}
    <Text style={styles.metricValue}>{value}</Text>
  </View>
);

const SleepIllustration = () => (
  <View style={styles.sleepIllustration}>
    <MaterialCommunityIcons name="bed" size={48} color="#87CEEB" />
    <Text style={styles.sleepZzz}>zzz</Text>
  </View>
);

const StepsIllustration = () => (
  <View style={styles.stepsIllustration}>
    {Array(8)
      .fill(0)
      .map((_, i) => (
        <View
          key={i}
          style={[
            styles.footprint,
            {
              opacity: 1 - i * 0.1,
              transform: [{ scale: 0.8 + i * 0.05 }],
            },
          ]}
        />
      ))}
  </View>
);

const CarouselIndicator = ({ active }: { active: number }) => (
  <View style={styles.carouselIndicator}>
    {Array(4)
      .fill(0)
      .map((_, i) => (
        <View
          key={i}
          style={[
            styles.indicator,
            i === active ? styles.indicatorActive : null,
          ]}
        />
      ))}
  </View>
);

const ActivityGrid = () => {
  const activities = [
    { icon: "run", title: "Running", value: "5 km" },
    { icon: "walk", title: "Walking", value: "10,000 steps" },
    { icon: "weight-lifter", title: "Strength Training", value: "45 min" },
    { icon: "bike", title: "Cycling", value: "15 km" },
  ];

  return (
    <View style={styles.gridContainer}>
      {activities.map((activity, index) => (
        <View key={index} style={styles.gridItem}>
          <MaterialCommunityIcons name={activity.icon} size={24} color="#666" />
          <Text style={styles.gridItemTitle}>{activity.title}</Text>
          <Text style={styles.gridItemValue}>{activity.value}</Text>
        </View>
      ))}
    </View>
  );
};

export default function ActivitySection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activity</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.metricsScroll}
      >
        <ActivityMetricCard
          icon="weather-night"
          title="Avg. Sleep"
          value="8h 12m"
          illustration={<SleepIllustration />}
        />
        <ActivityMetricCard
          icon="shoe-print"
          title="Avg. Steps"
          value="5,477"
          illustration={<StepsIllustration />}
        />
        <ActivityMetricCard icon="fire" title="Avg. Calories" value="2,100" />
      </ScrollView>

      <CarouselIndicator active={0} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#4285F4",
    marginBottom: 4,
  },
  metricsScroll: {
    paddingRight: 16,
  },
  metricCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginRight: 16,
    width: 200,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  metricHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  metricTitle: {
    fontSize: 20,
    fontWeight: "500",
    marginLeft: 8,
  },
  metricValue: {
    fontSize: 32,
    fontWeight: "700",
    marginTop: 16,
  },
  sleepIllustration: {
    alignItems: "center",
    height: 80,
  },
  sleepZzz: {
    color: "#87CEEB",
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    right: 60,
    top: 0,
  },
  stepsIllustration: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
  },
  footprint: {
    width: 16,
    height: 24,
    backgroundColor: "#4285F4",
    borderRadius: 8,
    marginHorizontal: 4,
  },
  carouselIndicator: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
    marginBottom: 24,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 4,
  },
  indicatorActive: {
    backgroundColor: "#4285F4",
    width: 24,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -8,
  },
  gridItem: {
    width: "50%",
    padding: 8,
  },
  gridItemInner: {
    backgroundColor: "#f5f6fa",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  gridItemTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 8,
  },
  gridItemValue: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
});
