import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Componnts
import NavBar from "../../../componenets/navbar/NavBar";

// Screen
import SplashScreen from "../../../screens/splash-screen/SplashScreen";
import WelcomeScreen from "../../../screens/welcome-screen/WelcomeScreen";
import TermsAndConditionScreen from "../../../screens/terms-and-condition-screen/TermsAndConditionScreen";
import VerifyScreen from "../../../screens/verify-screen/VerifyScreen";


const Stack = createNativeStackNavigator();

const OnboardingStackNavigation = () => {

    return (
        <>
                <NavBar />
            
            <Stack.Navigator screenOptions={{ headerShown: false }}>

                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Terms-and-Conditions" component={TermsAndConditionScreen} />
                <Stack.Screen name="Verify" component={VerifyScreen} />

            </Stack.Navigator>
        </>
    )
}

export default OnboardingStackNavigation;