import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { useState } from 'react';

import { TaskType } from '../../screen/Home';

import { styles } from './style';

type InputProps = {
    setTasks: (newTasksArray: TaskType[]) => void,
    tasks: TaskType[]
}

const Input = ({ tasks, setTasks }: InputProps) => {
    const [newTaskContent, setNewTaskContent] = useState('');

    const handleAddNewTask = () => {
        // Para o novo "id": Pega o id do ultimo elemento e soma 1
        // Se o array for vazio, o id vai ser zero:

        const newTask: TaskType = {
            id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 0,
            content: newTaskContent,
            completed: false
        }

        setTasks([...tasks, newTask])
        setNewTaskContent('');
    }

    return (
        <View style = {styles.inputContainer}>
            <TextInput 
                style = {styles.input}
                placeholder = 'Adicione uma nova tarefa'
                placeholderTextColor = '#808080' 
                onChangeText = {setNewTaskContent}
                value = {newTaskContent}
            />
            
            <TouchableOpacity style = {styles.button} onPress = {handleAddNewTask}>
                <Text style = {styles.buttonText}> + </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Input;