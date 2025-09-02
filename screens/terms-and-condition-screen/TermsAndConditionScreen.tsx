import { View, ScrollView, Text, Image, Pressable } from "react-native";

import { type NativeStackNavigationProp } from "@react-navigation/native-stack";

// React Hooks
import { useState } from "react";

// Utils - componenets
import ProceddButton from "../../utils/util-componenet/ProceddButton";
import GoBackArrow from "../../utils/util-componenet/GoBackArrow";

// Assets
import {UncheckedBox, CheckedBox } from "../../static/ImageData";

// Css
import { ColorsVariables, FontFamily } from "../../css-variable/CssVariables";

type TermsAndConditionScreenProps = {
    navigation: NativeStackNavigationProp<any>
}


const TermsAndConditionScreen = ({navigation}: TermsAndConditionScreenProps) => {

    const [isChecked, setIsChecked] = useState(false);

    const proceed = () => {
        if(isChecked){
            navigation.replace("Verify");
        }
    }

    return (
        <View style={{ paddingHorizontal: 32, paddingVertical: 20, gap: 20 }}>
            <GoBackArrow/>

            <ScrollView bounces={false}>

                <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontFamily: FontFamily.AvenirMedium, fontWeight: 500, fontSize: 24, color: ColorsVariables.BlackColor }}>
                        Terms and Conditions
                    </Text>
                    <View style={{ flexDirection: 'row', gap: 5 }}>
                        <Text >
                            Last Updated:
                        </Text>
                        <Text style={{ fontFamily: FontFamily.AvenirMedium, fontWeight: 500, color: ColorsVariables.GreyColor }}>
                            May 01, 2022
                        </Text>
                    </View>
                </View>

                <View style={{ marginBottom: 10 }}>
                    <Text style={{ color: ColorsVariables.BlackColor, fontWeight: 400, fontFamily: FontFamily.AvenirRoman }}>
                        This terms and condition describes Our policies and  procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                    </Text>
                </View>

                <View style={{ marginBottom: 10 }}>
                    <Text style={{ color: ColorsVariables.BlackColor, fontWeight: 400, fontFamily: FontFamily.AvenirRoman }}>
                        We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                    </Text>
                </View>

                <View style={{ marginBottom: 10 }}>
                    <Text style={{ marginBottom: 7 }}>Interpretation and Definitions</Text>
                    <Text style={{ color: ColorsVariables.BlackColor, fontWeight: 400, fontFamily: FontFamily.AvenirRoman }}>
                        The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural
                    </Text>
                </View>
                <View style={{ marginBottom: 30 }}>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={{ fontFamily: FontFamily.AvenirMedium, fontWeight: 500, fontSize: 24, color: ColorsVariables.BlackColor }}>
                            Privacy Policy
                        </Text>
                        <View style={{ flexDirection: 'row', gap: 5 }}>
                            <Text >
                                Last Updated:
                            </Text>
                            <Text style={{ fontFamily: FontFamily.AvenirMedium, fontWeight: 500, color: ColorsVariables.GreyColor }}>
                                May 01, 2022
                            </Text>
                        </View>
                    </View>

                    <Text style={{ color: ColorsVariables.BlackColor, fontWeight: 400, fontFamily: FontFamily.AvenirRoman }}>
                        This privacy policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You
                    </Text>
                </View>

                <Pressable onPress={() => setIsChecked(prev => !prev)} style={{flexDirection: 'row', gap: 10, marginBottom: 20}}>
                    <Image source={isChecked ? CheckedBox : UncheckedBox}/>
                    <Text style={{ color: ColorsVariables.BlackColor, fontWeight: 400, fontFamily: FontFamily.AvenirRoman }}>
                        I agree and accept the terms of the privacy and user agreement                    
                    </Text>
                </Pressable>

                <ProceddButton proceed={proceed} status={isChecked}/>

            </ScrollView>
        </View>
    )
}

export default TermsAndConditionScreen