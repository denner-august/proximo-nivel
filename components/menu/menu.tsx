import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { Titulo } from "../ferramentas/titulo";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { useEffect, useState } from "react";

export function Menu() {
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
        <Text style={{ color: "#ffff" }} key={key}>
          {item}
        </Text>
      );
    });
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log("teste")}>
          {ButtonMenu}
        </TouchableOpacity>
        <Titulo titulo="Avaliação" />
      </View>

      <View style={styles.menu}>
        <Text style={{ color: "#ffff", fontSize: 20, textAlign: "center" }}>
          Dias avaliados
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

    backgroundColor: "red",
    paddingLeft: 10,
  },

  menu: {
    flex: 2,
    marginTop: 30,
    // backgroundColor: "blue",
  },
  subMenu: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    height: "80%",
    backgroundColor: "red",
  },
});
