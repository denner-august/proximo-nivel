import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Fluxo } from "./screens/fluxo";

export default function App() {
  return (
    <View style={styles.container}>
      <Fluxo />
      <StatusBar style="light" translucent={true} backgroundColor="#28243B" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
