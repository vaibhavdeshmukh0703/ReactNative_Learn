import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNavigationStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./Screens/WelcomeScreen";
import LoginScreen from "./Screens/LoginScreen";
 
const stack = createNavigationStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C6BED" },
  headerTitleStyle: { color: "white" },
  headerTintColor: { color: "white" },
};

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={globalScreenOptions}>
        <stack.screen
          Option={(title = "  Welcome To Signal App")}
          name="Welcome"
          component={WelcomeScreen}
        />
        <stack.screen
          Option={(title = "Lets Sign Up")}
          name="Login"
          component={LoginScreen}
        />
      </stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

{
  /*  */
}
