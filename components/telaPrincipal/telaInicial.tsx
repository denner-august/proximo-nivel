import { StyleSheet, View, Image } from "react-native";
import { BaseTela } from "../base";
import { ButtonNext } from "../ferramentas/buttonNext";
import { Titulo } from "../ferramentas/titulo";

import { Dimensions } from "react-native";
const windowHeight = Dimensions.get("window").height;

export function Inicial({ navigation }: any) {
  return (
    <BaseTela>
      <View style={styles.container}>
        <Titulo titulo="Bem vindo ao Proximo-Nivel" />
        <Image
          style={styles.logo}
          source={require("../../assets/artes/logo.png")}
        />

        <ButtonNext
          buttonTitle="Continuar"
          NextScreen={() => navigation.navigate("apresentacao01")}
        />
      </View>
    </BaseTela>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    height: windowHeight,
  },
  logo: {
    backgroundColor: "white",
    height: "50%",
    width: "90%",
    borderRadius: 10,
  },
});
