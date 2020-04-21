import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#0A2739',
        paddingTop: Constants.statusBarHeight + 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    userName: {
        marginLeft: 8,
        fontSize: 20,
        color: '#FFF'
    },
    body: {
        marginBottom: 8,
        marginTop: 8,
    },
    logo: {
        width: 200,
        height: 200,
        marginTop: 25,
        resizeMode: 'contain',
    },
    input: {
        height: 50,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        width: '100%',
        borderWidth: .5,
        borderRadius: 8,
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
    sliderContainer: {
        flexDirection: 'row',
    },
    card: {
        width: 125,
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#D7EEFC",
    },
    cardText: {
        color: '#0A2739',
        fontWeight: 'bold'
    },
    back:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})