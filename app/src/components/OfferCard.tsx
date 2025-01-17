// OfferCard.tsx
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface OfferCardProps {
  brand: string;
  progress: number;
  totalPoints: number;
  code?: string;
}

const OfferCard: React.FC<OfferCardProps> = ({
  brand,
  progress,
  totalPoints,
  code,
}) => (
  <View style={styles.offerCard}>
    <Image
      source={{ uri: `https://logo.clearbit.com/${brand.toLowerCase()}.com` }}
      style={styles.brandLogo}
    />
    <View style={styles.progressContainer}>
      <Text style={styles.pointsText}>
        {progress}/{totalPoints}
      </Text>
      <View style={styles.progressBar}>
        <View
          style={[
            styles.progressFill,
            { width: `${(progress / totalPoints) * 100}%` },
          ]}
        />
      </View>
    </View>
    {code && (
      <View style={styles.codeContainer}>
        <Text style={styles.codeText}>Code: {code}</Text>
        <TouchableOpacity style={styles.copyButton}>
          <Ionicons name="copy-outline" size={20} color="#007AFF" />
        </TouchableOpacity>
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  offerCard: {
    backgroundColor: "#fff",
    margin: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  brandLogo: {
    width: 60,
    height: 60,
    alignSelf: "center",
    marginBottom: 12,
  },
  progressContainer: {
    marginVertical: 12,
  },
  pointsText: {
    textAlign: "center",
    marginBottom: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 4,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#007AFF",
    borderRadius: 4,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  codeText: {
    color: "#666",
  },
  copyButton: {
    padding: 4,
  },
});

export default OfferCard;
