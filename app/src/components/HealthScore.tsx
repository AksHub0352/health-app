import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Path, G, Circle, Text as SvgText } from "react-native-svg";

type HealthScoreProps = {
  score: number;
  maxScore?: number;
};

const GaugeChart = ({ score, maxScore = 900 }) => {
  const radius = 80;
  const strokeWidth = 12;
  const center = radius + strokeWidth;
  const scorePercentage = (score / maxScore) * 100;

  // Calculate coordinates for the semi-circle
  const describeArc = (percentage: number) => {
    const angleInRadians = ((180 * percentage) / 100) * (Math.PI / 180);
    const x = center + radius * Math.cos(angleInRadians);
    const y = center + radius * Math.sin(angleInRadians);
    const largeArc = percentage > 50 ? 1 : 0;

    return `M ${
      center - radius
    } ${center} A ${radius} ${radius} 0 ${largeArc} 1 ${x} ${y}`;
  };

  // Split the arc into colored segments
  const redArc = describeArc(33);
  const orangeArc = describeArc(66);
  const greenArc = describeArc(100);

  return (
    <Svg
      height={center * 2}
      width={center * 2}
      viewBox={`0 0 ${center * 2} ${center * 2}`}
    >
      {/* Background track */}
      <Path
        d={greenArc}
        stroke="#e0e0e0"
        strokeWidth={strokeWidth}
        fill="none"
      />

      {/* Colored segments */}
      <Path
        d={redArc}
        stroke="#FF4B4B"
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
      />
      <Path
        d={orangeArc}
        stroke="#FFA726"
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
      />
      <Path
        d={greenArc}
        stroke="#4CAF50"
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
      />

      {/* Score indicator */}
      <G transform={`rotate(${scorePercentage * 1.8} ${center} ${center})`}>
        <Circle
          cx={center - radius}
          cy={center}
          r={strokeWidth / 2}
          fill="#fff"
          stroke="#4CAF50"
          strokeWidth={2}
        />
      </G>

      {/* Score text */}
      <SvgText
        x={center}
        y={center - 10}
        textAnchor="middle"
        fill="#4CAF50"
        fontSize="24"
        fontWeight="bold"
      >
        {score}
      </SvgText>
      <SvgText
        x={center}
        y={center + 15}
        textAnchor="middle"
        fill="#666"
        fontSize="14"
      >
        Good
      </SvgText>
    </Svg>
  );
};

export default function HealthScore({
  score,
  maxScore = 900,
}: HealthScoreProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Health score</Text>
          <Text style={styles.subtitle}>Great Job!</Text>
          <Text style={styles.description}>
            You've been taking good care{"\n"}of your health.
          </Text>
          <Text style={styles.dateText}>Latest: 6 (Nov'23)</Text>
        </View>
        <GaugeChart score={score} maxScore={maxScore} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "500",
    color: "#4CAF50",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 8,
  },
  dateText: {
    fontSize: 12,
    color: "#999",
  },
});
