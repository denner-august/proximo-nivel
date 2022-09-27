import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid,
  Dimensions,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type ModalProps = {
  ChangeModal: Boolean;
  StateChangeModal: (state: boolean) => void;
};

export function Modal({ ChangeModal, StateChangeModal }: ModalProps) {
  async function ChangeDate(Choose: boolean) {
    if (Choose === false) {
      StateChangeModal(false);
      ToastAndroid.show("Cancelado", ToastAndroid.SHORT);
      return;
    }

    await AsyncStorage.clear();
    StateChangeModal(false);
    ToastAndroid.show("Apagado com sucesso", ToastAndroid.SHORT);
  }

  return ChangeModal === true ? (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={{ textAlign: "center", fontSize: 20, marginBottom: 30 }}>
          Tem certeza?
        </Text>

        <View style={styles.modalQuestion}>
          <TouchableOpacity
            style={styles.ModalButton}
            onPress={() => ChangeDate(true)}
          >
            <Text style={{ fontSize: 15, color: "#ffff" }}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ModalButton}
            onPress={() => ChangeDate(false)}
          >
            <Text style={{ fontSize: 15, color: "#ffff" }}>Não</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#f7ce4a",
              width: "80%",
              borderRadius: 5,
            }}
            onPress={() => StateChangeModal(false)}
          >
            <Text style={{ textAlign: "center", fontSize: 20, color: "#000" }}>
              Fechar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161010a7",
    height: windowHeight,
    width: windowWidth,
    zIndex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#ffff",
    height: 300,
    width: 300,
    borderRadius: 5,
    justifyContent: "space-evenly",
  },

  modalQuestion: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  ModalButton: {
    backgroundColor: "#0bcae4",
    width: 100,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
