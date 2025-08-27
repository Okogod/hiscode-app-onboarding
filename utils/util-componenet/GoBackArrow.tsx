import { View, ScrollView, Text, Image, Pressable } from "react-native";

// React Navigation Hooks
import { useNavigation } from "@react-navigation/native";

import { BackArrowIcon } from "../../static/ImageData";

const GoBackArrow = () => {

    const navigation = useNavigation()

    return (
        <Pressable onPress={() => navigation.goBack()}>
            <Image source={BackArrowIcon} />
        </Pressable>
    )
}

export default GoBackArrow