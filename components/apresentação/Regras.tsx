import { View, Text, StyleSheet, FlatList } from "react-native";

import { Titulo } from "../ferramentas/titulo";
import { ButtonNext } from "../ferramentas/buttonNext";
import { windowHeight } from "../ferramentas/dispositivo";
import { FontAwesome5 } from "@expo/vector-icons";

import RegrasAPP from "../../regras.json";
import { SafeAreaView } from "react-native-safe-area-context";

type regras = {
  item: string;
};

export function Regras({ navigation }: any) {
  const heartIcon = <FontAwesome5 name="heart" size={15} color="#99144c" />;

  function RenderRegras({ item }: regras) {
    return (
      <View style={style.ContainerRegras}>
        <Text style={style.regras}>
          {heartIcon}
          {item}
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <View style={style.Container}>
        <Titulo titulo="Regras" />

        <FlatList
          data={RegrasAPP.regras}
          renderItem={RenderRegras}
          keyExtractor={() => JSON.stringify(Math.random())}
        />

        <ButtonNext
          buttonTitle="Avançar"
          NextScreen={() => navigation.navigate("Menu")}
        />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  Container: {
    height: windowHeight,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#28243B",
    paddingVertical: 20,
  },

  ContainerRegras: {
    marginBottom: 10,
  },
  regras: {
    color: "#fff",
    fontSize: 15,
  },
});
