import { ReactNode } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";

import { windowHeight } from "./ferramentas/dispositivo";

interface childrenProps {
  children: ReactNode;
}

export function BaseTela({ children }: childrenProps) {
  return <ScrollView style={styles.Container}>{children}</ScrollView>;
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: 30 % windowHeight,
    backgroundColor: "#28243B",
  },
});
