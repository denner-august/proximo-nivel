import { View, Text, StyleSheet } from "react-native";

import { Titulo } from "../ferramentas/titulo";
import { BaseTela } from "../base";
import { ButtonNext } from "../ferramentas/buttonNext";
import { windowHeight } from "../ferramentas/dispositivo";
import { FontAwesome5 } from "@expo/vector-icons";

import RegrasAPP from "../../regras.json";

export function Regras() {
  const heartIcon = <FontAwesome5 name="heart" size={15} color="black" />;

  function RenderRegras() {
    return RegrasAPP.regras.map((item) => {
      return (
        <View key={item} style={style.ContainerRegras}>
          <Text style={style.regras}>
            {heartIcon}
            {item}
          </Text>
        </View>
      );
    });
  }

  return (
    <BaseTela>
      <View style={style.Container}>
        <Titulo titulo="Regras" />
        <View>{RenderRegras()}</View>
        <ButtonNext buttonTitle="Avançar" />
      </View>
    </BaseTela>
  );
}

const style = StyleSheet.create({
  Container: {
    height: windowHeight,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  ContainerRegras: {
    marginBottom: 10,
  },
  regras: {
    color: "#fff",
    fontSize: 15,
  },
});
