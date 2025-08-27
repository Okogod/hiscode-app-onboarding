import { Pressable, Text, StyleSheet } from 'react-native';

// Css
import { ColorsVariables } from '../../css-variable/CssVariables';

type ProceedButtonProps = {
    proceed: () => void,
    status: boolean,
    value?: string
}

const ProceddButton = ({ proceed, status, value }: ProceedButtonProps) => {
    return (
        <Pressable onPress={proceed} style={status ? style.Undisabled : style.Disabled}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>{value ? value : "Proceed"}</Text>
        </Pressable>
    )
}

export default ProceddButton;

const style = StyleSheet.create({
    Disabled: {
        backgroundColor: 'rgba(0, 107, 63, .5)',
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 16,
        width: `100%`
    },

    Undisabled: {
        backgroundColor: ColorsVariables.GreenColor,
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 16,
        width: `100%`
    }
})