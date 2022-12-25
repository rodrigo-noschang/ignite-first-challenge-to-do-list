import { View, TouchableWithoutFeedback } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Icon from 'react-native-vector-icons/EvilIcons';

import { TaskType } from "../../screen/Home";

import { styles } from "./style"


interface Props {
    task: TaskType,
    handleRemoveTask: (idToRemove: number) => void,
    togleTaskCompletion: (taskid: number) => void
}

const Task = ({ task, handleRemoveTask, togleTaskCompletion }: Props) => {
    
    return (
        <View style = {styles.taskContainer}>
            <BouncyCheckbox 
                style = {styles.taskText}
                size = {20}
                fillColor = {task.completed ? '#5E60CE' : 'transparent'}
                isChecked = {task.completed}
                iconStyle = {{
                    borderWidth: task.completed ? 0 : 2, 
                    borderColor: '#4EA8DE'
                }}
                text = {task.content}
                textStyle = {{
                    color: task.completed ? '#808080' : '#F2F2F2'
                }}
                onPress = { () => togleTaskCompletion(task.id) }
            />

            <TouchableWithoutFeedback onPress = {() => handleRemoveTask(task.id)}>
                <Icon name = 'trash' size = {23} color = '#808080'/>
            </TouchableWithoutFeedback>

        </View>
    )
}

export default Task