import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from 'react-native';

// Css
import { ColorsVariables } from './css-variable/CssVariables';

// Components
import NavBar from './componenets/navbar/NavBar';

// Screen
import OnboardingStackNavigation from "./navigations/stack-navigations/onboarding-stack-navigation/OnboardingStackNavigation";
import FinalScreen from "./screens/final-screen/FinalScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: ColorsVariables.AshColor }}>

      <NavigationContainer>

        <Stack.Navigator screenOptions={{headerShown: false}}>

          <Stack.Screen name="Onboarding" component={OnboardingStackNavigation}/>
          <Stack.Screen name="Final" component={FinalScreen}/>

        </Stack.Navigator>
        

      </NavigationContainer>
    </SafeAreaView>
  );
}