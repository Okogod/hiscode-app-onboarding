import { View, Text, TextInput, ScrollView, KeyboardAvoidingView, Pressable, StyleSheet } from "react-native";

// Props
import { type NativeStackNavigationProp } from '@react-navigation/native-stack';


// Recat Hooks
import { useState } from "react";

// Componenets
import ProceddButton from "../../utils/util-componenet/ProceddButton";

// Css
import { ColorsVariables, FontFamily } from "../../css-variable/CssVariables";

// Utils - Global Styling
import GlobalStyle from "../../utils/util-styling/GlobalStyling";


const Account_Types = ["PERSONAL ACCOUNT", "SAVINGS ACCOUNT", "CURRENT ACCOUNT"];

type WelcomeScreenProp = {
    navigation: NativeStackNavigationProp<any>;
}


const WelcomeScreen = ( {navigation}: WelcomeScreenProp) => {

    const [currentAccountTypes, setCurrentAccountType] = useState(Account_Types[0]);

    const [disabled, setDisabled] = useState(true);

    const procedd = () => {
        if(disabled){
            navigation.navigate("Terms-and-Conditions")
        }else{
            return false;
        }
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1, backgroundColor: ColorsVariables.AshColor }}>
            <ScrollView style={GlobalStyle.conatiner}>

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
                            <TextInput maxLength={11} keyboardType="numeric" style={{ borderBottomWidth: 1, borderColor: '#D8D8D8', marginBottom: 5, color: ColorsVariables.DarkBlackColor }} />
                        </View>
                        <Text style={{ fontWeight: 400, color: ColorsVariables.GreyColor, fontFamily: FontFamily.AvenirRoman, fontSize: 13.5 }}>
                            Dial *565*0# on your registered number to get your BVN
                        </Text>
                    </View>

                    <View style={{ marginBottom: 20 }}>
                        <Text style={{ padding: 0, margin: 0, color: ColorsVariables.BlackColor, fontWeight: 400, fontFamily: FontFamily.AvenirRoman }}>
                            Your full name
                        </Text>
                        <TextInput  style={{ borderBottomWidth: 1, borderColor: '#D8D8D8', marginBottom: 5, color: ColorsVariables.DarkBlackColor }} />
                    </View>

                    <View style={{ marginBottom: 20 }}>
                        <Text style={{ padding: 0, margin: 0, color: ColorsVariables.BlackColor, fontWeight: 400, fontFamily: FontFamily.AvenirRoman }}>
                            Enter your email address
                        </Text>
                        <TextInput keyboardType="email-address" style={{ borderBottomWidth: 1, borderColor: '#D8D8D8', marginBottom: 5, color: ColorsVariables.DarkBlackColor }} />
                    </View>

                    <View style={{ marginBottom: 30 }}>
                        <Text style={{ padding: 0, margin: 0, color: ColorsVariables.BlackColor, fontWeight: 400, fontFamily: FontFamily.AvenirRoman }}>
                            Your mobile number
                        </Text>
                        <TextInput maxLength={10} keyboardType="numeric" style={{ borderBottomWidth: 1, borderColor: '#D8D8D8', marginBottom: 5, color: ColorsVariables.DarkBlackColor }} />
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

                <ProceddButton proceed={procedd} status={disabled}/>

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