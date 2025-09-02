import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from 'react-native';

// Css
import { ColorsVariables } from './css-variable/CssVariables';

// Screen
import OnboardingStackNavigation from "./navigations/stack-navigations/onboarding-stack-navigation/OnboardingStackNavigation";
import FinalScreen from "./screens/final-screen/FinalScreen";

// Context Apis
import UserContextApi from "./contexts/UserContext";
import CountryContextApi from "./contexts/CountryContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CountryContextApi>
      <UserContextApi>
      <SafeAreaView style={{ flex: 1, backgroundColor: ColorsVariables.AshColor }}>

        <NavigationContainer>

          <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name="Onboarding" component={OnboardingStackNavigation} />
            <Stack.Screen name="Final" component={FinalScreen} />

          </Stack.Navigator>


        </NavigationContainer>
      </SafeAreaView>
    </UserContextApi>
    </CountryContextApi>
  );
}