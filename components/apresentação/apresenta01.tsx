import { Text, View, StyleSheet } from "react-native";

import { BaseTela } from "../base";
import { ButtonNext } from "../ferramentas/buttonNext";
import { Titulo } from "../ferramentas/titulo";

import { Dimensions } from "react-native";
const windowHeight = Dimensions.get("window").height;

export function Apresetacao01({ navigation }: any) {
  return (
    <BaseTela>
      <View style={styles.Container}>
        <Titulo titulo="Próximo-nível Primeiros passos" />
        <View
          style={{
            width: "100%",
            height: 250,
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Text style={styles.texto}>
            Este aplicativo foi Desenvolvido com a principal ideia de ajudar
            casais a se entenderem melhor, serve para casais recentes ou de
            longa data.
          </Text>
          <Text style={styles.texto}>
            Começaremos falando sobre as 5 linguagens do amor, caso você ainda
            não tenha ouvido falar terá uma explicação sobre cada uma na próxima
            tela.
          </Text>
        </View>
        <ButtonNext
          buttonTitle="Proximas intruções"
          NextScreen={() => navigation.navigate("Linguagens")}
        />
      </View>
    </BaseTela>
  );
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    height: windowHeight,
  },
  texto: {
    color: "#fff",
    fontSize: 17,
    width: "90%",
  },
});
