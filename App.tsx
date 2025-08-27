import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from 'react-native';

// Css
import { ColorsVariables } from './css-variable/CssVariables';

// Components
import NavBar from './componenets/navbar/NavBar';

// Screens
import SplashScreen from './screens/splash-screen/SplashScreen';
import WelcomeScreen from "./screens/welcome-screen/WelcomeScreen";
import TermsAndConditionScreen from "./screens/terms-and-condition-screen/TermsAndConditionScreen";
import VerifyScreen from "./screens/verify-screen/VerifyScreen";
import FinalScreen from "./screens/final-screen/FinalScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: ColorsVariables.AshColor }}>
      <NavBar />

      <NavigationContainer>

        <Stack.Navigator screenOptions={{headerShown: false}}>

          <Stack.Screen name="Splash" component={SplashScreen}/>
          <Stack.Screen name="Welcome" component={WelcomeScreen}/>
          <Stack.Screen name="Terms-and-Conditions" component={TermsAndConditionScreen}/>
          <Stack.Screen name="Verify" component={VerifyScreen}/>
          <Stack.Screen name="Final-Screen" component={FinalScreen}/>

        </Stack.Navigator>

      </NavigationContainer>
    </SafeAreaView>
  );
}