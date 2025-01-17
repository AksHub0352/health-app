// App.tsx
import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import RewardCard from "../components/RewardCard";
import OfferCard from "../components/OfferCard";
import AwardHeader from "../components/AwardHeader";

const RewardPage: React.FC = () => (
  <View style={styles.container}>
    <StatusBar style="auto" />
    <AwardHeader />
    <ScrollView style={styles.scrollView}>
      <Text style={styles.title}>HOW TO EARN REWARDS?</Text>

      <View style={styles.cardsContainer}>
        <RewardCard
          title="Documents"
          subtitle="Upload documents &"
          coins={150}
          type="document"
        />
        <RewardCard
          title="Cash Loan"
          subtitle="Pay EMI on &"
          coins={100}
          type="payment"
        />
      </View>

      <Text style={styles.subtitle}>Earn Coins and</Text>
      <Text style={styles.subtitle}>redeem your rewards!</Text>

      <OfferCard
        brand="RewardPagele"
        progress={25}
        totalPoints={50}
        code="DXF9JH125667"
      />
      <OfferCard brand="Tata" progress={50} totalPoints={100} />
      <OfferCard brand="Generic" progress={75} totalPoints={100} />
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 4,
  },
});

export default RewardPage;
