import { View, Text } from "react-native";

// Css
import { FontFamily, ColorsVariables } from "../../css-variable/CssVariables";

// React Hooks
import { useContext } from "react";

// Context
import { UserContextData } from "../../contexts/UserContext";

const FinalScreen = () => {

    const User = useContext(UserContextData);

    return (
        <View style={{alignItems: "center", marginTop: 100}}>
            <Text style={{ textAlign: 'center', fontFamily: FontFamily.AvenirMedium, fontWeight: 500, fontSize: 32, color: ColorsVariables.BlackColor }}>
                Welcome {User?.user?.fullName.split(" ")[0]}
            </Text>

            <View style={{margin: 'auto', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 20, fontFamily: FontFamily.AvenirRoman, fontWeight: 700, marginBottom: 20}}>Your Details:</Text>

                <View style={{flexDirection: "row", marginBottom: 10, gap: 5}}>
                    <Text>Full Name:</Text>
                    <Text style={{fontFamily:FontFamily.AvenirRoman}}>{User?.user?.fullName}</Text>
                </View>

                <View style={{flexDirection: "row", marginBottom: 10, gap: 5}}>
                    <Text>Email:</Text>
                    <Text style={{fontFamily:FontFamily.AvenirRoman}}>{User?.user?.email}</Text>
                </View>

                <View style={{flexDirection: "row", marginBottom: 10, gap: 5}}>
                    <Text>Bvn:</Text>
                    <Text style={{fontFamily:FontFamily.AvenirRoman}}>{User?.user?.bvn}</Text>
                </View>

                <View style={{flexDirection: "row", marginBottom: 10, gap: 5}}>
                    <Text>Account Type:</Text>
                    <Text style={{fontFamily:FontFamily.AvenirRoman}}>{User?.user?.accountType}</Text>
                </View>
                <View style={{flexDirection: "row", marginBottom: 10, gap: 5}}>
                    <Text>Country:</Text>
                    <Text style={{fontFamily:FontFamily.AvenirRoman}}>{User?.user?.country}</Text>
                </View>
                
            </View>
        </View>
    )
}

export default FinalScreen