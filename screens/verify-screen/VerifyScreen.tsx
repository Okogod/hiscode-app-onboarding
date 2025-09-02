import { View, StyleSheet, KeyboardAvoidingView, ScrollView, Text, TextInput, Pressable, useWindowDimensions, Image, Modal} from "react-native";

// React Hooks
import { useState, useRef, useEffect, useContext } from "react";

// Assets
import { VerifiedIcon } from "../../static/ImageData";

// Componenets
import ProceddButton from "../../utils/util-componenet/ProceddButton";

// Utils - Component
import GoBackArrow from "../../utils/util-componenet/GoBackArrow";

// Utils - Global Styling
import GlobalStyle from "../../utils/util-styling/GlobalStyling";

// Css
import { FontFamily, ColorsVariables } from "../../css-variable/CssVariables";

// type
import { type NativeStackNavigationProp } from "@react-navigation/native-stack";

type VerifyScreenProps = {
    navigation: NativeStackNavigationProp<any>
}

// Contexts
import { UserContextData } from "../../contexts/UserContext";

const OTP_CODE = "123456";


const VerifyScreen = ({ navigation }: VerifyScreenProps) => {

    const User = useContext(UserContextData);

    const height = useWindowDimensions().height;


    const [otp, setOtp] = useState<string[]>(Array(6).fill(''));

    const [buttonStatus, setButtonStatus] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const [focusedIndex, setFocusedIndex] = useState<number>(0);

    const [OtpError, setOtpError] = useState(false);



    const FocusedRef = useRef<TextInput>(null!);
    const UnfocusedRef = useRef<TextInput>(null!);


    const proceed = () => {
        if(buttonStatus){
            let otp_string = otp.join("").toString();
            if(otp_string.match(OTP_CODE)){
                setShowModal(true);
            }else{
                setOtpError(true);
            }
        }else{
            return false;
        }
    }


    const handleChange = (text: string, index: number) => {
        if (text != "") {
            setFocusedIndex(index + 1);
            setOtp(prev => {
                const arr = [...prev];
                arr.splice(index, 1, text);
                return arr
            })
        }else{
            setFocusedIndex(index - 1);
            setOtp(prev => {
                const arr = [...prev];
                arr.splice(index, 1, text);
                return arr
            })
        }
    };



    // To make the currently focused input focused
    useEffect(() => {
        FocusedRef.current?.focus();
    }, [focusedIndex])


    // To check if otp is filled and is valid
    useEffect(() => {
        if(otp.every(every => every !== "" && otp.length == 6)){
            setButtonStatus(true);
        }else{
            setButtonStatus(false);
        }
    }, [otp])







    return (
        <KeyboardAvoidingView>
            <ScrollView style={[GlobalStyle.conatiner]}>
                <GoBackArrow />

                <View style={{ gap: 24, marginTop: 10 }}>
                    <Text style={{ fontFamily: FontFamily.AvenirMedium, fontWeight: 500, fontSize: 24, color: ColorsVariables.BlackColor }}>
                        Verify Email Address
                    </Text>

                    <View style={{ marginBottom: 20 }}>
                        <Text style={{ textAlign: 'center', fontSize: 16, color: ColorsVariables.BlackColor, fontWeight: 400, fontFamily: FontFamily.AvenirRoman }}>
                            Enter 6-digit code we have sent to your email:
                            <Text style={{ fontFamily: FontFamily.AvenirMedium, fontWeight: 500 }}>{User?.user?.email}</Text>
                        </Text>
                        <Pressable onPress={() => navigation.replace("Welcome")}>
                            <Text style={{ textDecorationLine: 'underline', fontSize: 16, textDecorationColor: ColorsVariables.GreenColor, color: ColorsVariables.GreenColor, fontFamily: FontFamily.AvenirMedium, fontWeight: 500, textAlign: 'center' }}>
                                Not my number
                            </Text>
                        </Pressable>
                    </View>
                </View>

                <View style={{ marginBottom: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                    {
                        otp.map((_, index) => <TextInput
                            ref={index == focusedIndex ? FocusedRef : UnfocusedRef}
                            keyboardType="number-pad"
                            key={index}
                            style={index == focusedIndex ? style.Focused : style.Unfocused}
                            onFocus={() => {setFocusedIndex(index), setOtpError(false)}}
                            maxLength={1}
                            onChangeText={(text) => handleChange(text, index)}
                        />
                        )
                    }
                </View>
                {
                    OtpError && <Text style={{ textAlign: 'center', fontSize: 16, color: ColorsVariables.RedColor, fontWeight: 500, fontFamily: FontFamily.AvenirMedium, marginBottom: 5, }}>
                        You typed the wrong code. Kindly check the code and input it again!
                    </Text>
                }

                <ProceddButton proceed={proceed} status={buttonStatus} value="Confirm OTP" />

            </ScrollView>

            <Modal visible={showModal}>
                <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(6, 6, 11, 0.5)', position: 'absolute', left: 0, right: 0, top:0, height: height, paddingHorizontal: 24 }}>
                <View style={{backgroundColor: '#fff',alignItems: 'center', borderRadius: 12,paddingHorizontal: 20, paddingVertical: 24,}}>
                    <View style={{ backgroundColor: '#fff', borderRadius: 12, paddingHorizontal: 20, paddingVertical: 24, alignItems: 'center', gap: 24 }}>
                        <Image source={VerifiedIcon} />

                        <View>
                            <Text style={{ textAlign: 'center', fontFamily: FontFamily.AvenirMedium, fontWeight: 500, fontSize: 24, color: ColorsVariables.BlackColor }}>
                                Confirmation Successful
                            </Text>
                            <Text style={{ textAlign: 'center', width: 300, fontSize: 16, color: ColorsVariables.BlackColor, fontWeight: 400, fontFamily: FontFamily.AvenirRoman }}>
                                Dear customer, your mobile number has been successfully confirmed.
                            </Text>
                        </View>
                    </View>
                    <View style={{width: 300}}>
                        <ProceddButton proceed={() => {navigation.navigate("Final"), setShowModal(false)}} status={true} />
                    </View>
                </View>

            </View>
            </Modal>


        </KeyboardAvoidingView>
    )
}


export default VerifyScreen;

const style = StyleSheet.create({
    Focused: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: ColorsVariables.YellowColor,
        width: 50,
        paddingHorizontal: 17,
        paddingVertical: 17,
        textAlign: 'center',
        fontSize: 16
    },

    Unfocused: {
        borderWidth: 1,
        borderRadius: 8,
        width: 50,
        paddingHorizontal: 17,
        paddingVertical: 17,
        textAlign: 'center',
        fontSize: 16
    }
})