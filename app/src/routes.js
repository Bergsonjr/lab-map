import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Logon from './pages/Logon'
import Recover from './pages/Recover'
import Register from './pages/Register'

import RequesterHome from './pages/Requester/Home'

function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Logon" component={Logon}></AppStack.Screen>
                <AppStack.Screen name="Recover" component={Recover}></AppStack.Screen>
                <AppStack.Screen name="Register" component={Register}></AppStack.Screen>
                <AppStack.Screen name="RequesterHome" component={RequesterHome}></AppStack.Screen>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes