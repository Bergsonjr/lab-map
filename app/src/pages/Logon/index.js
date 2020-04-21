import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, Image, Text, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native'

import styles from './styles'

import logoImg from '../../assets/logo.png'


function Logon() {

    const navigation = useNavigation()
    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin() {
        console.log(userId, password)
        if(true){
            // Se as validações estiverem ok 
            const user = {
                name: 'Henri Bergson'

            }
            if(true){
                // se for do tipo solicitante
                navigation.navigate('RequesterHome', {user})
            }
           
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
        
                <Image style={styles.logo} source={logoImg} alt="Lab. logo"></Image>

                <TextInput style={styles.input} value={userId} onChangeText={value => setUserId(value)} placeholder='Matrícula' keyboardAppearance='dark' selectionColor='#FFF' keyboardType='numeric' placeholderTextColor='#FFF' />
                <TextInput style={styles.input} value={password} onChangeText={value => setPassword(value)} secureTextEntry placeholder='Senha' keyboardAppearance='dark' selectionColor='#FFF' placeholderTextColor='#FFF' />

                <TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.navigate('Recover')}>
                    <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.login} onPress={handleLogin}>
                    <Text style={styles.loginText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.register} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.registerText}>Não possui cadastro? <Text style={styles.registerLinkText}>Cadastrar</Text></Text>
                </TouchableOpacity>

            </View>
            </TouchableWithoutFeedback>
    )
}

export default Logon