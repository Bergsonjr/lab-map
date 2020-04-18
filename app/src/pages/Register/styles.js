import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        paddingHorizontal: 24,
        backgroundColor: '#0A2739',
    },
    logo: {
        width: 200,
        height: 200,
        marginTop: 25,
        resizeMode: 'contain',
    },
    input: {
        height: 50,
        margin: 10,
        padding: 10,
        width: '100%',
        borderWidth: .5,
        color: '#FFFFFF',
        textAlign: 'center',
        borderColor: '#FFF',
        backgroundColor: 'transparent',
    },
    forgotPassword: {
        marginTop: 15,
    },
    forgotPasswordText: {
        color: '#FFFFFF',
    },
    register: {
        padding: 10,
        width: '100%',
        height: 50,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#D7EEFC",
    },
    registerText: {
        color: '#0A2739',
        fontWeight: 'bold'
    },
})