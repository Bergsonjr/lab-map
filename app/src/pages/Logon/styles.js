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
        height: 60,
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
    login: {
        marginTop: 15,
        alignItems: "center",
        backgroundColor: "#D7EEFC",
        padding: 10,
        width: '100%'
    },
    loginText: {
        color: '#0A2739',
        fontWeight: 'bold'
    },
    register: {
        marginTop: 15,
        alignItems: 'center'
    },
    registerText: {
        color: '#FFFFFF'
    },
    registerLinkText: {
        fontSize: 14,
        fontWeight: 'bold'
    },
})