import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './style';

type Props = {
    children: string,
    borderColor: string,
    action: () => void
}

const ActionButton = ({ children, borderColor, action }: Props) => {

    return (
        <View>
            <TouchableOpacity style = {{...styles.button, borderColor: borderColor}} onPress = {action}>
                <Text style = {{...styles.buttonText, color: borderColor}}> {children} </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ActionButton;