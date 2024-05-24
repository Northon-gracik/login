import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#5a9a99',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 8
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    ancora: {
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: 8,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid'
    },
    textAnconra: {
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        fontSize: 18,
    },
});

export default styles;