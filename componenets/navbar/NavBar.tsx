import { View, Image, Text, Pressable } from "react-native";

// React Hooks
import { useState, useContext } from "react";

// Data
import CountryData from "../../static/ConuntryData";

// Assets
import { Logo, DropDownIcon, DropUpIcon } from "../../static/ImageData";

// Css
import { ColorsVariables, FontFamily } from "../../css-variable/CssVariables";

// Context
import { CountryContext } from "../../contexts/CountryContext";


const NavBar = () => {

    const Country = useContext(CountryContext);

    const [showCountryList, setShowCountryList] = useState(false);

    const [currentCountry, setCurrentCountry] = useState(Country?.country)

    return (
        <View style={{ position: 'relative', paddingHorizontal: 24, paddingVertical: 13, backgroundColor: ColorsVariables.AshColor }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Image source={Logo} />
                <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center', borderWidth: 1, borderColor: ColorsVariables.GreenColor, paddingVertical: 13, paddingHorizontal: 12, borderRadius: 5 }}>

                    <View style={{ flexDirection: 'row', gap: 8 }}>
                        <Image source={currentCountry?.flag} style={{ width: 30, height: 20 }} />
                        <Text style={{ color: ColorsVariables.GreenColor, fontFamily: FontFamily.AvenirRoman }}>
                            {currentCountry?.name}
                        </Text>
                    </View>

                    <Pressable onPress={() => setShowCountryList(prev => !prev)}>
                        <Image source={ showCountryList ? DropUpIcon : DropDownIcon} />
                    </Pressable>

                </View>
            </View>

            {
                showCountryList && <View style={{zIndex: 100, position: 'absolute', top: 70, right: 20, gap: 10, backgroundColor: ColorsVariables.AshColor, borderColor: ColorsVariables.GreenColor, borderWidth: 1, padding: 20, borderRadius: 5 }}>
                    {
                        CountryData.filter(data => data.id !== currentCountry?.id).map((data, i) =>
                            <Pressable key={data.id} onPress={() => {Country?.setCountry(data), setShowCountryList(false)}}>
                                <View style={{ flexDirection: 'row', gap: 8, padding: 7, borderBottomWidth: 1, borderBottomColor: ColorsVariables.GreenColor }}>
                                <Image source={data.flag} style={{ width: 30, height: 20 }} />
                                <Text style={{ color: ColorsVariables.GreenColor, fontFamily: FontFamily.AvenirRoman }}>
                                    {data.name}
                                </Text>
                            </View>
                            </Pressable>
                        )
                    }
                </View>
            }

        </View>
    )
}


export default NavBar;