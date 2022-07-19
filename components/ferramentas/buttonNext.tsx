import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

interface buttonNextProps {
  buttonTitle: string;
  NextScreen?: () => void;
}

export function ButtonNext({
  buttonTitle = "titulo do button",
  NextScreen,
}: buttonNextProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={NextScreen}
        accessibilityLabel="Proxima tela"
      >
        <Text style={{ color: "#ffff", fontSize: 17 }}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
  },
  button: {
    height: 40,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#99144c",

    justifyContent: "center",
    alignItems: "center",
  },
});
