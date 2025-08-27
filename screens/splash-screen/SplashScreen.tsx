import { View, Text, Image, Pressable } from "react-native";

// Assets
import { JoinImage } from "../../static/ImageData";
import { ColorsVariables, FontFamily } from "../../css-variable/CssVariables";

// Props
import { type NativeStackNavigationProp } from '@react-navigation/native-stack';

// Component
import ProceddButton from "../../utils/util-componenet/ProceddButton";

type SplashScreenProps = {
    navigation: NativeStackNavigationProp<any>;
};

const SplashScreen = ({ navigation }: SplashScreenProps) => {

    const proceed = () => {
        navigation.navigate("Welcome");
    }

    return(
        <View style={{flex:1, gap: 30, backgroundColor: ColorsVariables.AshColor, paddingHorizontal: 32, paddingTop: 50}}>
                <Image source={JoinImage} resizeMode="contain" style={{width: 280,height: 300, marginHorizontal: 'auto'}}/>

                <View style={{gap: 64}}>
                    <View style={{marginBottom: 70}}>
                        <Text style={{fontSize: 28, fontFamily: FontFamily.AvenirMedium, fontWeight: 500, textAlign: 'center'}}>Join HISCode today!</Text>
                        <Text style={{fontSize: 16, fontFamily: FontFamily.AvenirRoman, fontWeight: 400, color: ColorsVariables.BlackColor, textAlign: 'center'}}>The biggest software solution in africa!</Text>
                    </View>
                    
                   <ProceddButton  proceed={proceed} status={true}/>
                </View>
        </View>
    )
}

export default SplashScreen;