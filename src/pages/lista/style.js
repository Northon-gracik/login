import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 8,
    },
    title: {
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        marginLeft: 10,
    },
    addButton: {
        backgroundColor: '#5a9a99',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 8
    },
    addButtonText: {
        color: 'white',
        fontSize: 18,
    },
    ancora: {
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#555',
        borderStyle: 'solid',
        marginBottom: 8
    },
    textAnconra: {
        color: '#555',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        fontSize: 18,
    },
});

export default styles