import { View, Text } from "react-native";

import { styles } from "./style";

type Props = {
    label: string,
    value: number,
    color: string
}

const TaskCounter = ({label, value, color}: Props) => {

    return (
        <View style = {styles.taskCounterContainer}>
            <Text style = {{...styles.taskCounterLabel, color: color}}>
                {label} 
            </Text>

            <Text style = {styles.taskCounterValue}> 
                {value} 
            </Text>
        </View>
    )
}

export default TaskCounter;