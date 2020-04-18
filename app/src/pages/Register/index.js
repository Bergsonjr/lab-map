import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { View, Image, Text, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'

import styles from './styles'
function Register() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [puc_id, setPucId] = useState()
    const [password, setPassword] = useState()
    const [password_confirm, setPasswordConfirm] = useState()
    const DimissKeyboard = ({ children }) => (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    )

    return (
        <DimissKeyboard>
            <View style={styles.container}>
                <TextInput style={styles.input} value={name} placeholder='Nome' keyboardAppearance='dark' selectionColor='#FFF' placeholderTextColor='#CCC' />
                <TextInput style={styles.input} value={email} placeholder='Email' keyboardAppearance='dark' selectionColor='#FFF' placeholderTextColor='#CCC' />
                <TextInput style={styles.input} value={phone} placeholder='Telefone' keyboardAppearance='dark' selectionColor='#FFF' keyboardType='numeric' placeholderTextColor='#CCC' />
                <TextInput style={styles.input} value={puc_id} placeholder='Matrícula' keyboardAppearance='dark' selectionColor='#FFF' keyboardType='numeric' placeholderTextColor='#CCC' />
                <TextInput style={styles.input} secureTextEntry value={password} placeholder='Senha' keyboardAppearance='dark' selectionColor='#FFF' placeholderTextColor='#CCC' />
                <TextInput style={styles.input} secureTextEntry value={password_confirm} placeholder='Confirmar senha' keyboardAppearance='dark' selectionColor='#FFF' placeholderTextColor='#CCC' />

                <TouchableOpacity style={styles.register}>
                    <Text style={styles.registerText}>Registrar</Text>
                </TouchableOpacity>
            </View>
        </DimissKeyboard>
    )
}

export default Register