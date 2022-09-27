import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Dimensions } from "react-native";

import { Modal } from "./Modal";
const windowWidth = Dimensions.get("window").width;

export function Options() {
  const [OpenModal, setOpenModal] = useState(false);

  return (
    <ScrollView style={styles.Container}>
      <Modal ChangeModal={OpenModal} StateChangeModal={setOpenModal} />
      <View
        style={[
          styles.selectOptions,
          { position: OpenModal ? "absolute" : undefined },
        ]}
      >
        <Text>Apagar todas as avaliações</Text>
        <TouchableOpacity
          style={styles.ConfirmButton}
          onPress={() => setOpenModal(true)}
        >
          <Text style={{ color: "#000" }}>confirmar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#28243B",
  },
  selectOptions: {
    marginTop: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    height: 40,
    width: windowWidth,
    // zIndex: 1,
    // position: "absolute",
  },
  ConfirmButton: {
    backgroundColor: "#44d17f",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    width: "30%",
  },
});
