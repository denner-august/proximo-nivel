import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ToastAndroid,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AntDesign } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowWidth = Dimensions.get("window").width;

export function Avaliacao({ navigation, route }: any) {
  const { dia } = route.params;
  const buttonVoltar = <AntDesign name="back" size={30} color="#fff" />;

  const [NotaDay, setNotaDay] = useState("");

  useEffect(() => {
    async function getResulDay() {
      try {
        const value = await AsyncStorage.getItem(`Notaday${dia}`);
        if (value !== null) {
          setNotaDay(value);
        }
      } catch (e) {
        ToastAndroid.show("Erro ao salvar os dados", ToastAndroid.SHORT);
      }
    }
    getResulDay();
  }, []);

  async function SalvarNota() {
    if (NotaDay.length > 0) {
      try {
        await AsyncStorage.setItem(`Notaday${dia}`, NotaDay);
        ToastAndroid.show(`Dia ${dia} salvo`, ToastAndroid.SHORT);
      } catch (e) {
        ToastAndroid.show("Erro ao salvar os dados", ToastAndroid.SHORT);
      }
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#28243B" }}>
      <View style={style.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
          {buttonVoltar}
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            color: "white",
            textAlign: "center",
            marginLeft: windowWidth / 3.2,
          }}
        >
          dia {dia}
        </Text>
      </View>

      <View style={style.avaliacao}>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            textAlign: "center",
            marginTop: 30,
          }}
        >
          Avaliação
        </Text>
        <View style={style.notadia}>
          <RadioButton.Group
            onValueChange={(value) => setNotaDay(value)}
            value={NotaDay}
          >
            <RadioButton.Item
              label="Muito ruim"
              value="Ruim"
              color="white"
              labelStyle={{ color: "white" }}
            />
            <RadioButton.Item
              label="Pode Melhorar"
              value="Médio"
              color="white"
              labelStyle={{ color: "white" }}
            />
            <RadioButton.Item
              label="Perfeito"
              value="Bom"
              color="white"
              labelStyle={{ color: "white" }}
            />
          </RadioButton.Group>
        </View>

        <TouchableOpacity style={style.ButtonSalvar} onPress={SalvarNota}>
          <Text style={{ fontSize: 20, textAlign: "center", color: "#ffff" }}>
            Salvar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    marginTop: 10,
    paddingHorizontal: 10,

    flexDirection: "row",
  },
  avaliacao: {
    flex: 1,
    borderRadius: 10,
    margin: 20,
  },
  notadia: {
    height: 250,
    borderRadius: 5,
    margin: 10,
    marginTop: "30%",

    justifyContent: "center",

    backgroundColor: "#2ca0a8",
  },
  ButtonSalvar: {
    height: 70,
    margin: 10,

    justifyContent: "center",
    alignItems: "center",
    marginTop: "30%",

    backgroundColor: "#2ca0a8",
    borderRadius: 5,
  },
});
