import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { View, Image, Text, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'

import styles from './styles'
function Recover() {

    const navigation = useNavigation()

    const [email, setEmail] = useState()

    function handleRecover(){
        console.log(name,email, phone, puc_id, password, password_confirm)
    }

    function navigateBack() {
        navigation.goBack()
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity style={styles.back} onPress={navigateBack}>
                    <Feather name="chevron-left" size={36} color="#FFF"></Feather>
                </TouchableOpacity>
                </View>
                <View style={styles.body}>

               <Text style={styles.title}>Recuperar senha</Text>
                <TextInput style={styles.input} value={email} onChangeText={value => setEmail(value)}  placeholder='Email' keyboardAppearance='dark' selectionColor='#FFF' placeholderTextColor='#CCC' />

                <TouchableOpacity style={styles.recover} onPress={handleRecover}>
                    <Text style={styles.recoverText}>Recuperar</Text>
                </TouchableOpacity>
                </View>
            </View>
            </TouchableWithoutFeedback>
    )
}

export default Recover