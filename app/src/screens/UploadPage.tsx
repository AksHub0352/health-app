import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons";

interface UploadModalProps {
  visible: boolean;
  onClose: () => void;
}

const UploadOption = ({ icon, title, subtitle, onPress }) => (
  <TouchableOpacity style={styles.optionCard} onPress={onPress}>
    <View style={styles.iconContainer}>{icon}</View>
    <View style={styles.optionText}>
      <Text style={styles.optionTitle}>{title}</Text>
      <Text style={styles.optionSubtitle}>{subtitle}</Text>
    </View>
  </TouchableOpacity>
);

const UploadModal: React.FC<UploadModalProps> = ({ visible, onClose }) => {
  const uploadOptions = [
    {
      icon: <MaterialIcons name="cloud-upload" size={24} color="#fff" />,
      title: "Upload",
      subtitle: "from device",
    },
    {
      icon: <Ionicons name="camera" size={24} color="#fff" />,
      title: "Take",
      subtitle: "a photo",
    },
    {
      icon: <FontAwesome name="whatsapp" size={24} color="#fff" />,
      title: "Upload",
      subtitle: "with whatsapp",
    },
    {
      icon: <MaterialIcons name="mail" size={24} color="#fff" />,
      title: "Upload",
      subtitle: "from mail",
    },
  ];

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.modalOverlay} onPress={onClose}>
        <View style={styles.modalContent}>
          <View style={styles.optionsGrid}>
            {uploadOptions.map((option, index) => (
              <UploadOption
                key={index}
                icon={option.icon}
                title={option.title}
                subtitle={option.subtitle}
                onPress={() => {}}
              />
            ))}
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <MaterialIcons name="close" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "#5F9EFF",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#333",
    borderRadius: 16,
    padding: 16,
    width: "80%",
    maxWidth: 400,
  },
  optionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
  },
  optionCard: {
    width: "47%",
    backgroundColor: "#444",
    borderRadius: 12,
    padding: 16,
    alignItems: "flex-start",
  },
  iconContainer: {
    backgroundColor: "#007AFF",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  optionText: {
    alignItems: "flex-start",
  },
  optionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  optionSubtitle: {
    color: "#999",
    fontSize: 14,
  },
  closeButton: {
    position: "absolute",
    top: -48,
    right: 0,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UploadModal;
