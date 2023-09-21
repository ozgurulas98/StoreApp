import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Products from "./src/pages/Products";
import Detail from "./src/pages/Detail";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductsPage"
          component={Products}
          options={{
            title: "Store",
            headerStyle: { backgroundColor: "#64b5f6" },
            headerTitleStyle: { color: "white" },
          }}
        />
        <Stack.Screen name="DetailPage" component={Detail} 
        options={{
          title: "Detail",
          headerStyle: { backgroundColor: "#64b5f6" },
          headerTitleStyle: { color: "white" },
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
