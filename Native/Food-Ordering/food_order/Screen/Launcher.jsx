import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from './Login';
import Register from './Register';
import Menu from './Menu';
import Bill from './Bill';
import Payment from './Payment';
import ThankYou from './ThankYou';
import Profile from './Profile';

export default function Launcher() {

    var Stack = createNativeStackNavigator();


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Register' component={Register} />
                <Stack.Screen name='Menu' component={Menu} />
                <Stack.Screen name='Bill' component={Bill} />
                <Stack.Screen name='Payment' component={Payment} />
                <Stack.Screen name='Profile' component={Profile} />
                <Stack.Screen name='ThankYou' component={ThankYou}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}