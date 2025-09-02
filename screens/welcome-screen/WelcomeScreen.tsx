import { View, Text, TextInput, ScrollView, KeyboardAvoidingView, Pressable, StyleSheet } from "react-native";

// Props
import { type NativeStackNavigationProp } from '@react-navigation/native-stack';


// Recat Hooks
import { useState, useEffect, useContext } from "react";

// Componenets
import ProceddButton from "../../utils/util-componenet/ProceddButton";

// Css
import { ColorsVariables, FontFamily } from "../../css-variable/CssVariables";

// Utils - Global Styling
import GlobalStyle from "../../utils/util-styling/GlobalStyling";

// Context
import { UserContextData } from "../../contexts/UserContext";
import { CountryContext } from "../../contexts/CountryContext";


const Account_Types = ["PERSONAL ACCOUNT", "SAVINGS ACCOUNT", "CURRENT ACCOUNT"];

// Type
type WelcomeScreenProp = {
    navigation: NativeStackNavigationProp<any>;
}


const WelcomeScreen = ({ navigation }: WelcomeScreenProp) => {

    const User = useContext(UserContextData);
    const Country = useContext(CountryContext);

    // Account type state.
    const [currentAccountTypes, setCurrentAccountType] = useState(Account_Types[0]);

    // Button disabled state
    const [disabled, setDisabled] = useState(false);


    // Bvn value state.
    const [bvnValue, setBvnValue] = useState("");

    // Bvn error state.
    const [bvnError, setBvnError] = useState("");


    // Full name value.
    const [fullName, setFullName] = useState("");

    // Full name error.
    const [fullNameError, setFullNameError] = useState("");


    // Email value.
    const [emailValue, setEmailValue] = useState("");

    // Email error.
    const [emailError, setEmailError] = useState("");

    // Number value.
    const [numberValue, setNumberValue] = useState("");

    // Number error.
    const [numberError, setNumberError] = useState("");




    // Function to handle bvn input on change.
    const Bvn_Change = (text: string) => {
        if (text != "") {
            setBvnValue(text);
        } else {
            setBvnValue(bvnValue);
        }
    }

    // Function to handle bvn input on blur.
    const Bvn_Blur = () => {
        if (bvnValue.length < 11) {
            setBvnError("Bvn value must be up to 11 digits");
            setBvnValue("");
        } else {
            setBvnError("");
            setBvnValue(bvnValue);
        }
    }





    // Function to handle full name input on change.
    const FullName_Change = (text: string) => {
        if (text != "") {
            setFullName(text.trim());
        }
    }

    // Function to handle full name input on blur.
    const FullName_Blur = () => {
        if (fullName) {
            if (/^[A-Z][a-z]+ [A-Z][a-z]+$/.test(fullName)) {
                setFullName(fullName);
                setFullNameError("");
            } else {
                setFullName("");
                setFullNameError("Name input can only take letters and spaces");
            }
        } else {
            setFullNameError("Name field was empty");
        }
    }





    // Function to handle email input on change. 
    const Email_Change = (text: string) => {
        if (text != "") {
            setEmailValue(text.trim());
        }
    }

    // Function to handle email input on blur.
    const Email_Blur = () => {
        if (emailValue) {
            if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue)) {
                setEmailValue(emailValue);
                setEmailError("");
            } else {
                setEmailValue("");
                setEmailError("Invalid email pattern");
            }
        } else {
            setEmailError("Email field was empty");
        }
    }




    // Function to handle number input on change.
    const Number_Change = (text: string) => {
        if (text != "") {
            setNumberValue(text);
        } else {
            setNumberValue(numberValue);
        }
    }

    // function to handle number input on blur.
    const Number_Blur = () => {
        if (numberValue.length < 10) {
            setNumberError("Number value must be up to 10 digits");
            setNumberValue("");
        } else {
            setNumberError("");
            setNumberValue(numberValue);
        }
    }




    // To check if all fields are filled
    useEffect(() => {
        if(numberValue && fullName && emailValue && bvnValue ){
            setDisabled(true);
        }else{
            setDisabled(false);
        }
    }, [numberValue, fullName, emailValue, bvnValue])



    // Function to handle input validation and proceed to next screen.
    const procedd = () => {
        if (disabled) {
            User?.setUser({fullName: fullName, email: emailValue, bvn:bvnValue, number: numberValue, accountType: currentAccountTypes, country: (Country?.country.name as string)})
            navigation.replace("Terms-and-Conditions")
        } else {
            return false;
        }
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1, backgroundColor: ColorsVariables.AshColor }}>
            <ScrollView style={GlobalStyle.conatiner} bounces={false}>


                <View style={{ marginBottom: 30 }}>
                    <Text style={{ color: ColorsVariables.BlackColor, fontSize: 32, fontFamily: FontFamily.AvenirMedium, fontWeight: 500 }}>
                        Welcome! 🤠
                    </Text>
                    <Text style={{ fontFamily: FontFamily.AvenirRoman, color: ColorsVariables.BlackColor, fontSize: 16 }}>
                        Dear customer, you have requested to open a new account, kindly complete the input fields and select your account type
                    </Text>
                </View>


                <View style={{ marginBottom: 30 }}>

                    <View style={{ marginBottom: 20 }}>
                        <View>
                            <Text style={{ padding: 0, margin: 0, color: ColorsVariables.BlackColor, fontWeight: 400, fontFamily: FontFamily.AvenirRoman }}>
                                Enter your BVN
                            </Text>
                            <TextInput onChangeText={(text => Bvn_Change(text))} onBlur={Bvn_Blur} onFocus={() => setBvnError("")} maxLength={11} keyboardType="number-pad" style={{ borderBottomWidth: 1, borderColor: '#D8D8D8', marginBottom: 5, color: ColorsVariables.DarkBlackColor }} />
                            {bvnError && <Text style={{ color: ColorsVariables.RedColor, marginBottom: 5, fontFamily: FontFamily.AvenirRoman }}>{bvnError}</Text>}
                        </View>
                        <Text style={{ fontWeight: 400, color: ColorsVariables.GreyColor, fontFamily: FontFamily.AvenirRoman, fontSize: 13.5 }}>
                            Dial *565*0# on your registered number to get your BVN
                        </Text>
                    </View>

                    <View style={{ marginBottom: 20 }}>
                        <Text style={{ padding: 0, margin: 0, color: ColorsVariables.BlackColor, fontWeight: 400, fontFamily: FontFamily.AvenirRoman }}>
                            Your full name
                        </Text>
                        <TextInput autoCapitalize="words" autoCorrect={false} onChangeText={(text) => FullName_Change(text)} onBlur={FullName_Blur} onFocus={() => setFullNameError("")} style={{ borderBottomWidth: 1, borderColor: '#D8D8D8', marginBottom: 5, color: ColorsVariables.DarkBlackColor }} />
                        {fullNameError && <Text style={{ color: ColorsVariables.RedColor, marginBottom: 5, fontFamily: FontFamily.AvenirRoman }}>{fullNameError}</Text>}
                    </View>

                    <View style={{ marginBottom: 20 }}>
                        <Text style={{ padding: 0, margin: 0, color: ColorsVariables.BlackColor, fontWeight: 400, fontFamily: FontFamily.AvenirRoman }}>
                            Enter your email address
                        </Text>
                        <TextInput autoCorrect={false} autoCapitalize="none" onChangeText={(text) => Email_Change(text)} onBlur={Email_Blur} onFocus={() => setEmailError("")} keyboardType="email-address" style={{ borderBottomWidth: 1, borderColor: '#D8D8D8', marginBottom: 5, color: ColorsVariables.DarkBlackColor }} />
                        {emailError && <Text style={{ color: ColorsVariables.RedColor, marginBottom: 5, fontFamily: FontFamily.AvenirRoman }}>{emailError}</Text>}
                    </View>

                    <View style={{ marginBottom: 30 }}>
                        <Text style={{ padding: 0, margin: 0, color: ColorsVariables.BlackColor, fontWeight: 400, fontFamily: FontFamily.AvenirRoman }}>
                            Your mobile number
                        </Text>
                        <TextInput onChangeText={(text) => Number_Change(text)} onBlur={Number_Blur} onFocus={() => setNumberError("")} maxLength={10} keyboardType="number-pad" style={{ borderBottomWidth: 1, borderColor: '#D8D8D8', marginBottom: 5, color: ColorsVariables.DarkBlackColor }} />
                        {numberError && <Text style={{ color: ColorsVariables.RedColor, marginBottom: 5, fontFamily: FontFamily.AvenirRoman }}>{numberError}</Text>}
                    </View>
                </View>


                <View style={{ gap: 12, marginBottom: 40 }}>
                    <Text style={{ fontWeight: 400, fontSize: 14, fontFamily: FontFamily.AvenirRoman }}>
                        SELECT ACCOUNT TYPE:
                    </Text>
                    <View style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>
                        {
                            Account_Types.map((type, i) =>
                                <Pressable key={i} onPress={() => setCurrentAccountType(type)} style={currentAccountTypes == type ? style.ActiveAccount : style.NonActiveAccount}>
                                    <Text style={currentAccountTypes == type ? style.ActiveAccountText : style.NonActiveText}>{type}</Text>
                                </Pressable>
                            )
                        }
                    </View>
                </View>

                <ProceddButton proceed={procedd} status={disabled} />

            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default WelcomeScreen

const style = StyleSheet.create({
    ActiveAccount: {
        backgroundColor: ColorsVariables.GreenColor,
        paddingHorizontal: 5,
        paddingVertical: 15,
        height: 50,
        borderRadius: 4,
        width: 170
    },
    ActiveAccountText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 500,
        fontFamily: FontFamily.AvenirMedium
    },
    NonActiveAccount: {
        backgroundColor: ColorsVariables.AshColor,
        borderWidth: 1,
        borderColor: ColorsVariables.BlackColor,
        paddingHorizontal: 5,
        paddingVertical: 15,
        height: 50,
        borderRadius: 4,
        width: 170
    },

    NonActiveText: {
        fontFamily: FontFamily.AvenirRoman,
        textAlign: 'center',
        fontWeight: 400
    }
})