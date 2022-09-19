import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Titulo } from "../ferramentas/titulo";

import Linguanges_amor from "../../Linguagens-amor.json";
import { ButtonNext } from "../ferramentas/buttonNext";
import { windowHeight } from "../ferramentas/dispositivo";
import { SafeAreaView } from "react-native-safe-area-context";
import { linguangesProps } from "../../types/linguagens";

export function Linguagens({ navigation }: any) {
  function renderizaLinguanges({ item }: linguangesProps) {
    return (
      <TouchableOpacity
        style={{
          marginVertical: 15,
        }}
        key={item.titulo}
        onPress={() =>
          navigation.navigate("Descricacao_linguagens", {
            linguagem: item,
          })
        }
      >
        <Text style={styles.texto}>{item.titulo}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.Container}>
        <Titulo titulo="As Linguagens do Amor" />

        <FlatList
          data={Linguanges_amor["linguagens-amor"]}
          renderItem={renderizaLinguanges}
          keyExtractor={(item) => item.titulo}
        />

        <ButtonNext
          buttonTitle="Proximas intruções"
          NextScreen={() => navigation.navigate("Regras")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    height: windowHeight,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "#28243B",
  },
  texto: {
    color: "white",
    fontSize: 20,
  },
});
