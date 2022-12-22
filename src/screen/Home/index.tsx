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

    const handleRemoveTask = (idToRemove: number) => {
        const updatedTasks = tasks.filter(task => task.id !== idToRemove)

        setTasks(updatedTasks);
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
                    value = {2} 
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
                        />
                    )}
                </ScrollView>
            </View>

        </View>

    )
}

export default Home;