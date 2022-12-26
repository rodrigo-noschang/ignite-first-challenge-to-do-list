import { View, 
    TouchableWithoutFeedback,
    Text, 
    Image } from "react-native"
// import BouncyCheckbox from "react-native-bouncy-checkbox";
import Icon from 'react-native-vector-icons/EvilIcons';
import IconFA from 'react-native-vector-icons/FontAwesome';

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
            
            <TouchableWithoutFeedback onPress = {() => togleTaskCompletion(task.id)}>
                <View style = {styles.taskTextContainer}>
                    <View style = {task.completed ? styles.iconContainerCompletedTask : styles.iconContainer}>
                        { task.completed &&
                            <IconFA name = 'check' size = {13} color = '#f2f2f2' style = {styles.taskIcon}/>
                        }
                    </View>

                    <View style = {styles.taskContentContainer}>
                        <Text style = {task.completed ? styles.taskTextCompletedTask : styles.taskText}> {task.content } </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress = {() => handleRemoveTask(task.id)}>
                <Icon name = 'trash' size = {23} color = '#808080'/>
            </TouchableWithoutFeedback>

        </View>
    )
}

export default Task