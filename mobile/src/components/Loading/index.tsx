import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import styles from "./styles";

const Loading: React.FC = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="#0066cc" />
      <Text style={styles.loadingText}>Carregando mapa</Text>
    </View>
  );
};

export default Loading;
