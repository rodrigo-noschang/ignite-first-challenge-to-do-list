import { View, TextInput, TouchableOpacity, Text } from 'react-native'

import { styles } from './style';

const Input = () => {

    return (
        <View style = {styles.inputContainer}>
            <TextInput 
                style = {styles.input}
                placeholder = 'Adicione uma nova tarefa'
                placeholderTextColor = '#808080'
            />
            
            <TouchableOpacity style = {styles.button} >
                <Text style = {styles.buttonText}> + </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Input;