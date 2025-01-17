import React from "react";
import { StyleSheet, View, Modal, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import UploadOption from "./UploadOption";

interface UploadModalProps {
  visible: boolean;
  onClose: () => void;
}

const UploadModal: React.FC<UploadModalProps> = ({ visible, onClose }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}
  >
    <View style={styles.modalOverlay}>
      <View style={styles.modalContent}>
        <View style={styles.optionsGrid}>
          <UploadOption
            icon={<Ionicons name="cloud-upload" size={24} color="#fff" />}
            title="Upload"
            subtitle="from device"
          />
          <UploadOption
            icon={<Ionicons name="camera" size={24} color="#fff" />}
            title="Take"
            subtitle="a photo"
          />
          <UploadOption
            icon={<Ionicons name="whatsapp" size={24} color="#fff" />}
            title="Upload"
            subtitle="with WhatsApp"
          />
          <UploadOption
            icon={<Ionicons name="email-outline" size={24} color="#fff" />}
            title="Upload"
            subtitle="from mail"
          />
        </View>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Ionicons name="close" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

export default UploadModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#2c2c2c",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingBottom: 40,
  },
  optionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#3a3a3a",
    justifyContent: "center",
    alignItems: "center",
  },
});
