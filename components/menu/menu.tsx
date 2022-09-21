import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { Titulo } from "../ferramentas/titulo";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { useEffect, useState } from "react";

export function Menu({ navigation }: any) {
  const ButtonMenu = <Entypo name="menu" size={30} color="#ffff" />;

  const [Dias, setDias] = useState<number[]>([]);

  useEffect(() => {
    function gerar() {
      let i = 0;
      for (let index = 1; index <= 30; index++) {
        setDias((Dias) => [...Dias, index]);
      }
    }

    gerar();
    return () => {
      setDias([]);
    };
  }, []);

  function RenderNumber() {
    return Dias.map((item, key) => {
      return (
        <TouchableOpacity
          key={key}
          onPress={() =>
            navigation.navigate("Avaliação", {
              dia: item,
            })
          }
        >
          <Text style={styles.diaSemana}>{item}</Text>
        </TouchableOpacity>
      );
    });
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Options")}>
          {ButtonMenu}
        </TouchableOpacity>
        <Titulo titulo="Avaliação" />
      </View>

      <View style={styles.menu}>
        <Text style={{ color: "#ffff", fontSize: 20, textAlign: "center" }}>
          Dias da semana e avaliados
        </Text>

        <View style={styles.subMenu}>{RenderNumber()}</View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#28243B",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",

    paddingLeft: 10,
  },
  menu: {
    flex: 2,
    marginTop: 30,
  },
  subMenu: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: "80%",
    justifyContent: "center",
    alignContent: "center",
  },

  diaSemana: {
    color: "#ffff",
    backgroundColor: "#208386",
    textAlign: "center",
    fontSize: 15,
    borderRadius: 5,
    padding: 10,
    margin: 5,
    width: 50,
    height: 45,
  },
});
