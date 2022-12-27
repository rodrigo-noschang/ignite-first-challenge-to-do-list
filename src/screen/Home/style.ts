import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        width: '100%'
    },

    tasksCounterContainer: {
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 35,
    },

    tasksEditorContianer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30
    },

    taskListContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
        flex: .95
    }


})