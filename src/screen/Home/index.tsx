import { View, ScrollView, Alert } from 'react-native';
import { useState } from 'react';

import { styles } from './style';

import Header from "../../components/Header";
import Input from '../../components/Input';
import TaskCounter from '../../components/TaskCounter';
import Task from '../../components/Task';
import EmptyList from '../../components/EmptyList';
import ActionButton from '../../components/ActionButton';

export type TaskType = {
    id: number,
    content: string,
    completed: boolean
}

const Home = () => {
    const [tasks, setTasks] = useState<TaskType[]>([]);
    const completedTasks = tasks.reduce((acc, curr) => {
        return curr.completed ? acc + 1 : acc + 0
    }, 0);

    const removeTask = (idToRemove: number) => {
        const updatedTasks = tasks.filter(task => task.id !== idToRemove)

        setTasks(updatedTasks);
    }

    const handleRemoveTask = (idToRemove: number) => {
        const task = tasks.find(task => task.id === idToRemove);
        if (!task) return;
        
        Alert.alert('Remover Tarefa', `Deseja remover tarefa ${task.content}?`, [
            {
                text: 'Sim',
                onPress: () => removeTask(idToRemove)
            },
            {
                text: 'Não'
            }
        ]);
    }

    const sortTasksByCompletion = () => {
        const sortedTasks = [...tasks];
        sortedTasks.sort((a, b) => Number(a.completed) - Number(b.completed));

        return sortedTasks;
    }

    const togleTaskCompletion = (taskId: number) => {
        const selectedTask = tasks.find(task => task.id === taskId );
        if (!selectedTask) return;
        
        const currentTaskState = selectedTask.completed;

        selectedTask.completed = !currentTaskState
        const sortedTasksByCompletion = sortTasksByCompletion();

        setTasks(sortedTasksByCompletion);
    }

    const concludeAllTasks = () => {
        const concludedTasks = tasks.map(task => {
            task.completed = true;
            return task
        })

        setTasks(concludedTasks);
    }

    const handleConcludeAllTasks = () => {
        Alert.alert('Concluir Tarefas', 'Deseja mesmo concluir todas as tarefas?', [
            {
                text: 'Sim',
                onPress: concludeAllTasks
            },
            {
                text: 'Cancelar'
            }
        ]) 
    }

    const deleteAll = () => {
        setTasks([]);
    }

    const handleDeleteAll = () => {
        Alert.alert('Deletar Todas', 'Deseja mesmo deletar todas as tarefas?', [
            {
                text: 'Sim',
                onPress: deleteAll
            },
            {
                text: 'Cancelar'
            }
        ])
    }

    return (
        <View style = {styles.homeContainer}>
            <Header />
            <Input tasks = {tasks} setTasks = {setTasks}/>

            <View style = {styles.tasksCounterContainer}>
                <TaskCounter 
                    label = 'Criadas' 
                    value = {tasks.length} 
                    color = '#4EA8DE'
                />

                <TaskCounter 
                    label = 'Concluídas' 
                    value = {completedTasks} 
                    color = '#8284FA'
                />
            </View>

            { tasks.length === 0 ?
            <EmptyList />
            
            :

            <View style = {styles.taskListContainer}>
                <View style = {styles.tasksEditorContianer}>
                    <ActionButton borderColor = '#4EA8DE' action = {handleDeleteAll}>
                        Deletar Todas
                    </ActionButton>

                    <ActionButton borderColor = '#8284FA' action = {handleConcludeAllTasks}>
                        Concluir Todas
                    </ActionButton>
                </View>

                <ScrollView>
                    { tasks.map((task, index) => 
                        <Task 
                            key = {index} 
                            task = {task}
                            handleRemoveTask = {handleRemoveTask}
                            togleTaskCompletion = {togleTaskCompletion}
                        />
                    )}
                </ScrollView>
            </View>
            }

        </View>

    )
}

export default Home;