import { Text, StyleSheet, View, ScrollView } from "react-native";
import { BaseTela } from "../base";
import { ButtonNext } from "../ferramentas/buttonNext";
import { windowHeight } from "../ferramentas/dispositivo";
import { Titulo } from "../ferramentas/titulo";

interface descricaoProps {
  navigation: { goBack: () => void };
  route: { params: { linguagem: { titulo: string; conteudo: string } } };
}

export function Descricacao_linguagens({ navigation, route }: descricaoProps) {
  const { titulo, conteudo } = route.params.linguagem;

  return (
    <BaseTela>
      <ScrollView style={{ flex: 1 }}>
        <View style={style.Container}>
          <Titulo titulo="descrição" />
          <Text style={style.textos}>{titulo}</Text>
          <Text style={style.textos}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus recusandae illum beatae mollitia, non quia ratione
            maxime amet obcaecati dolore vero iure eaque ea repellat soluta
            minima quae ad adipisci. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Beatae quibusdam exercitationem voluptatem a ipsam
          </Text>

          <ButtonNext
            buttonTitle="Voltar"
            NextScreen={() => navigation.goBack()}
          />
        </View>
      </ScrollView>
    </BaseTela>
  );
}

const style = StyleSheet.create({
  Container: {
    minHeight: windowHeight,
    height: "auto",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textos: {
    color: "#fff",
    fontSize: 18,
    textAlign: "left",
    width: "90%",
  },
});
