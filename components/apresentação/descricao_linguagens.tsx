import { Text, StyleSheet, View, ScrollView } from "react-native";
import { BaseTela } from "../base";
import { ButtonNext } from "../ferramentas/buttonNext";
import { windowHeight } from "../ferramentas/dispositivo";
import { Titulo } from "../ferramentas/titulo";

export function Descricacao_linguagens({ navigation, route }: any) {
  const { titulo, subtitulo, conteudo, exemplos } = route.params.linguagem;

  function RenderizaExemplos() {
    return exemplos.map((item: any, key: any) => {
      return (
        <Text key={key} style={[style.textos, style.exemplo]}>
          {item}
        </Text>
      );
    });
  }

  return (
    <BaseTela>
      <ScrollView style={{ flex: 1 }}>
        <View style={style.Container}>
          <Titulo titulo="descrição" />
          <View style={style.conteudoTexto}>
            <Text style={[style.textos, style.titulo]}>{titulo}</Text>
            <Text style={[style.textos, style.subtitulo]}>{subtitulo}</Text>
            <View>{RenderizaExemplos()}</View>
            <Text style={style.textos}>{conteudo}</Text>
          </View>

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
  conteudoTexto: {
    width: "95%",
    justifyContent: "space-evenly",
  },
  textos: {
    color: "#fff",
    fontSize: 15,
    textAlign: "left",
    marginTop: 10,
    marginBottom: 10,
  },
  titulo: {
    color: "#f6ae2d",
    fontSize: 16.5,
  },
  subtitulo: {
    color: "#00abe7",
  },
  exemplo: {
    color: "#fc9f5b",
  },
});
