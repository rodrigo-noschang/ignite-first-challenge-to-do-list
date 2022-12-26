import { View, Text, Image } from "react-native";

import clipboard from '../../assets/Clipboard.png';
import { styles } from "./style";

const EmptyList = () => {
    return (
        <View style = {styles.container}>
            <Image source = {clipboard}/>
            <Text style = {styles.firstText}>
                Você ainda não tem tarefas cadastradas
            </Text>
            <Text style = {styles.secondText}>
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    )
}

export default EmptyList;