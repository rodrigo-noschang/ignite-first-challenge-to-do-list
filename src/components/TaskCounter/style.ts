import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    taskCounterContainer: {
        flexDirection: 'row'
    },

    taskCounterLabel: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
        marginRight: 10
    },

    taskCounterValue: {
        fontSize: 16,
        color: '#D9D9D9',
        fontWeight: 'bold',
        backgroundColor: '#333',
        textAlign: 'center',
        paddingHorizontal: 12,
        borderRadius: 15,
        alignSelf: 'flex-start'

    }
})