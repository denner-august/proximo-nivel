import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { BaseTela } from "../base";
import { Titulo } from "../ferramentas/titulo";

import Linguanges_amor from "../../Linguagens-amor.json";
import { ButtonNext } from "../ferramentas/buttonNext";
import { windowHeight } from "../ferramentas/dispositivo";
import { useState } from "react";

export function Linguagens() {
  const [abrirModal, setAbrirModal] = useState("");

  function renderizaLinguanges() {
    return Linguanges_amor["linguagens-amor"].map((item) => {
      return (
        <TouchableOpacity
          key={item.titulo}
          onPress={() => setAbrirModal(item.titulo)}
        >
          <Text style={styles.texto}>{item.titulo}</Text>
          {
            abrirModal === item.titulo ??
              null /*'abrira o modal pra pagina mostrando uma descrição da linguagem' */
          }
        </TouchableOpacity>
      );
    });
  }

  return (
    <BaseTela>
      <View style={styles.Container}>
        <Titulo titulo="As Linguagens do Amor" />
        <View style={styles.Container_Linguagens}>{renderizaLinguanges()}</View>
        <ButtonNext buttonTitle="Proximas intruções" />
      </View>
    </BaseTela>
  );
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    height: windowHeight,
    paddingHorizontal: 10,
  },

  Container_Linguagens: {
    height: "60%",
    justifyContent: "space-evenly",
  },

  texto: {
    color: "white",
    fontSize: 20,
  },
});
