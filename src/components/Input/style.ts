import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        width: '100%',
        marginTop: -30,
        justifyContent: 'center'
    },

    input: {
        color: '#F2F2F2',
        backgroundColor: '#262626',
        paddingVertical: 13,
        paddingLeft: 12,
        fontSize: 18,
        borderRadius: 8,
        flex: .9
    },

    button: {
        backgroundColor: '#1E6F9F',
        padding: 15,
        width: 60,
        borderRadius: 8,
        marginLeft: 7
    },

    buttonText: {
        fontSize: 20,
        color: '#FFF',
        borderWidth: 2,
        borderColor: '#FFF',
        borderStyle: 'solid',
        borderRadius: 23,
        textAlign: 'center'
    }
})