import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    taskContainer: {
        backgroundColor: '#262626',
        marginTop: 8,
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8
    },

    taskTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: .95,
        paddingVertical: 15
    },

    iconContainer: {
        width: 23,
        height: 23,
        padding: 2,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#4EA8DE',
        borderRadius: 23
    },

    iconContainerCompletedTask: {
        width: 23,
        height: 23,
        padding: 2,
        borderRadius: 23,
        backgroundColor: '#5E60CE'
    },

    taskIcon: {
        marginTop: 3,
        marginLeft: 3
    },

    taskContentContainer: {
        marginLeft: 15
    },

    taskText: {
        color: '#f2f2f2',
        fontSize: 18
    },

    taskTextCompletedTask: {
        textDecorationLine: 'line-through',
        color: '#808080',
        fontSize: 18,
    }

})