// RewardCard.tsx
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

interface RewardCardProps {
  title: string;
  coins: number;
  subtitle: string;
  type: "document" | "payment";
}

const RewardCard: React.FC<RewardCardProps> = ({
  title,
  coins,
  subtitle,
  type,
}) => (
  <TouchableOpacity style={styles.rewardCard}>
    <View style={styles.rewardContent}>
      <Text style={styles.rewardTitle}>{title}</Text>
      <Text style={styles.rewardSubtitle}>{subtitle}</Text>
      <View style={styles.coinInfo}>
        <Image
          source={require("../../../assets/images/image1.png")}
          style={styles.smallCoinIcon}
        />
        <Text>{coins} coins</Text>
      </View>
    </View>
    {type === "document" ? (
      <Text style={styles.uploadButton}>Upload</Text>
    ) : (
      <Text style={styles.payButton}>Pay Now</Text>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  rewardCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    width: "45%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rewardContent: {
    marginBottom: 12,
  },
  rewardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  rewardSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  coinInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  smallCoinIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  uploadButton: {
    backgroundColor: "#007AFF",
    color: "#fff",
    padding: 8,
    borderRadius: 8,
    textAlign: "center",
  },
  payButton: {
    backgroundColor: "#FF3B30",
    color: "#fff",
    padding: 8,
    borderRadius: 8,
    textAlign: "center",
  },
});

export default RewardCard;
