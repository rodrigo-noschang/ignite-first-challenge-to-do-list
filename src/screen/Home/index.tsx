import { View } from 'react-native';

import { styles } from './style';

import Header from "../../components/Header";
import Input from '../../components/Input';
import TaskCounter from '../../components/TaskCounter';

const Home = () => {
    return (
        <View style = {styles.homeContainer}>
            <Header />
            <Input />

            <View style = {styles.tasksCounterContainer}>
                <TaskCounter 
                    label = 'Criadas' 
                    value = {5} 
                    color = '#4EA8DE'
                />

                <TaskCounter 
                    label = 'Concluídas' 
                    value = {2} 
                    color = '#8284FA'
                />
            
            </View>

        </View>

    )
}

export default Home;