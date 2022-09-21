import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { BaseTela } from "../base";

export function Options() {
  return (
    <ScrollView style={styles.Container}>
      <Text style={{ fontSize: 30, color: "white" }}>testando</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#28243B",
  },
});
