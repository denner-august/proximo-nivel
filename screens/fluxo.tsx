import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Inicial } from "../components/telaPrincipal/telaInicial";
import { Apresetacao01 } from "../components/apresentação/apresenta01";
import { Linguagens } from "../components/apresentação/linguagens";

const Stack = createNativeStackNavigator();

export function Fluxo() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Inicial}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="apresentacao01"
          component={Apresetacao01}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Linguagens"
          component={Linguagens}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
