import { View, KeyboardAvoidingView, ScrollView, Text, TextInput, Pressable, useWindowDimensions, Image, Modal } from "react-native";

// React Hooks
import { useState } from "react";

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

const Box_Array = new Array(6).fill("");

const VerifyScreen = ({ navigation }: VerifyScreenProps) => {
    const { height } = useWindowDimensions();

    const [showModal, setShowModal] = useState(true);

    const proceed = () => {

    }

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
                            Enter 5-digit code we have sent to your mobile number:
                            <Text style={{ fontFamily: FontFamily.AvenirMedium, fontWeight: 500 }}>iakinyemi@ecobank.com</Text>
                        </Text>
                        <Pressable onPress={() => navigation.replace("Welcome")}>
                            <Text style={{ textDecorationLine: 'underline', fontSize: 16, textDecorationColor: ColorsVariables.GreenColor, color: ColorsVariables.GreenColor, fontFamily: FontFamily.AvenirMedium, fontWeight: 500, textAlign: 'center' }}>
                                Not my number
                            </Text>
                        </Pressable>
                    </View>
                </View>

                <View style={{ marginBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                    {
                        Box_Array.map((_, i) => <TextInput keyboardType="numeric" key={i} style={{ borderWidth: 1, borderRadius: 8, width: 50, paddingHorizontal: 17, paddingVertical: 17, textAlign: 'center', fontSize: 16 }} />
                        )
                    }
                </View>
                <Text style={{ textAlign: 'center', fontSize: 16, color: ColorsVariables.RedColor, fontWeight: 500, fontFamily: FontFamily.AvenirMedium, marginBottom: 5, }}>
                    You typed the wrong code. Kindly check the code and input it again!
                </Text>

                <Pressable>
                    <Text style={{ marginBottom: 20, textDecorationLine: 'underline', fontSize: 16, textDecorationColor: ColorsVariables.GreenColor, color: ColorsVariables.GreenColor, fontFamily: FontFamily.AvenirMedium, fontWeight: 500, textAlign: 'center' }}>
                        Resend Code
                    </Text>
                </Pressable>

                <ProceddButton proceed={proceed} status={true} value="Confirm OTP" />
                
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
                        <ProceddButton proceed={() => {navigation.navigate("Final-Screen"), setShowModal(false)}} status={true} />
                    </View>
                </View>

            </View>
            </Modal>

            
        </KeyboardAvoidingView>
    )
}


export default VerifyScreen