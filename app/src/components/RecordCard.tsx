import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { RecordCardProps } from "../../types";
import {
  Home,
  ChevronDown,
  MoreVertical,
  Stethoscope,
} from "lucide-react-native";

type ExtendedRecordCardProps = RecordCardProps & {
  clinicalHistory?: string;
  reportImage?: string;
};

const RecordCard: React.FC<ExtendedRecordCardProps> = ({
  title,
  type,
  doctor,
  clinicalHistory,
  findings,
  reportImage,
}) => {
  const getTypeColor = (type: RecordCardProps["type"]) => {
    const colors = {
      Imaging: "#BEEFFF",
      Labs: "#FFF7B2",
      Outpatient: "#CEFFD1",
      "Genetic Testing": "#CCFFF0",
      Pathology: "#EED2FF",
      Procedure: "#FFD39F",
      Hospitalization: "#F9D2EE",
    };
    return colors[type];
  };

  return (
    <View style={styles.card}>
      <View style={styles.titleContainer}>
        <View style={styles.titleSection}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.badgeContainer}>
          <View
            style={[styles.typeBadge, { backgroundColor: getTypeColor(type) }]}
          >
            <Image
              source={require("../../../assets/images/image1.png")}
              style={styles.badgeIcon}
            />
            <Text style={styles.typeText}>{type}</Text>
          </View>
          <TouchableOpacity style={styles.moreButton}>
            <MoreVertical size={20} color="#666" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.infoSection}>
        <View style={styles.hospitalInfo}>
          <Home size={16} color="#4B84F7" style={styles.icon} />
          <Text style={styles.hospitalText}>
            Lorem ipsum dolor sit amet consectetur
          </Text>
        </View>
        <View style={styles.doctorInfo}>
          <Stethoscope size={16} color="#4B84F7" style={styles.icon} />
          <Text style={styles.doctorText}>{doctor}</Text>
        </View>
      </View>

      <View style={styles.clinicalSection}>
        <View style={{ width: "50%" }}>
          <View>
            <Text style={styles.sectionTitle}>Clinical History :</Text>
            <Text style={styles.clinicalText}>
              {clinicalHistory || "The patient presented with occasional..."}
            </Text>
          </View>

          <View style={styles.findingsSection}>
            <Text style={styles.sectionTitle}>Findings :</Text>
            <Text style={styles.findingText}>
              This MRI of the brain reveals no significant ...
            </Text>
          </View>
        </View>
        <View style={{ width: "50%" }}>
          <Image
            source={require("../../../assets/images/image1.png")}
            style={styles.reportImage}
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.viewReportButton}>
            <Text style={styles.viewReportText}>View Report</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.reportSection}></View>

      <TouchableOpacity style={styles.viewAllButton}>
        <Text style={styles.viewAllText}>View all</Text>
        <ChevronDown size={20} color="#4B84F7" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  titleSection: {
    flex: 1,
    marginRight: 16,
  },
  title: {
    fontSize: 24,
    color: "#000",
  },
  badgeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  typeBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    marginRight: 8,
  },
  badgeIcon: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  typeText: {
    fontSize: 16,
  },
  moreButton: {
    padding: 4,
  },
  infoSection: {
    marginBottom: 16,
    flexDirection: "row",
    gap: 10,
  },
  hospitalInfo: {
    alignItems: "center",
    marginBottom: 8,
    flexDirection: "row",
    width: "56%",
  },
  doctorInfo: {
    flexDirection: "row",
    alignItems: "center",
    width: "40%",
  },
  icon: {
    marginRight: 8,
  },
  hospitalText: {
    color: "#666",
    flex: 1,
  },
  doctorText: {
    color: "#666",
    fontSize: 16,
  },
  clinicalSection: {
    marginBottom: 16,
    flexDirection: "row",
  },
  sectionTitle: {
    fontSize: 18,
    color: "#000",
    marginBottom: 8,
  },
  clinicalText: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
  findingsSection: {
    marginBottom: 16,
  },
  findingText: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
  reportSection: {
    alignItems: "center",
    marginBottom: 16,
  },
  reportImage: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    marginBottom: 8,
  },
  viewReportButton: {
    marginTop: 8,
    alignItems: "center",
  },
  viewReportText: {
    color: "#4B84F7",
    fontSize: 16,
    alignItems: "center",
  },
  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  viewAllText: {
    color: "#4B84F7",
    fontSize: 16,
    marginRight: 4,
  },
});

export default RecordCard;
