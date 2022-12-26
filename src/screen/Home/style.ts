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
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomStyle: 'solid',
        borderBottomColor: '#808080',
        paddingBottom: 20
    },

    taskListContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
        flex: .95
    }
})