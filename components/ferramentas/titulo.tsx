import { StyleSheet, Text } from "react-native";

interface tituloProps {
  titulo: string;
}

export function Titulo({ titulo = "digite um titulo" }: tituloProps) {
  return <Text style={styles.titulo}>{titulo}</Text>;
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    color: "#ffff",
    textAlign: "center",
    width: "90%",
  },
});
