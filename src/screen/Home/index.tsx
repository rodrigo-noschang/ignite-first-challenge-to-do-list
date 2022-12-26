import { View, ScrollView } from 'react-native';
import { useState } from 'react';

import { styles } from './style';

import Header from "../../components/Header";
import Input from '../../components/Input';
import TaskCounter from '../../components/TaskCounter';
import Task from '../../components/Task';

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

    const handleRemoveTask = (idToRemove: number) => {
        const updatedTasks = tasks.filter(task => task.id !== idToRemove)

        setTasks(updatedTasks);
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

            <View style = {styles.taskListContainer}>
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

        </View>

    )
}

export default Home;