import { View, Text } from "react-native";

import { FontFamily, ColorsVariables } from "../../css-variable/CssVariables";

const FinalScreen = () => {
    return (
        <View style={{ justifyContent: "center", alignItems: "center", margin: "auto" }}>
            <Text style={{ textAlign: 'center', fontFamily: FontFamily.AvenirMedium, fontWeight: 500, fontSize: 24, color: ColorsVariables.BlackColor }}>
                Welcome User!!!
            </Text>
        </View>
    )
}

export default FinalScreen