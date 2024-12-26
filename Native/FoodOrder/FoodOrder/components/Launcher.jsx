import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Registration from './Registration';
import Login from './Login';
import Menu from './Menu';
import Thankyou from './Thankyou';
import Billing from './Billing';
import Pay from './Pay';
import Profile from './Profile';
export default function Launcher() {
 
    var Stack=createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='login' component={Login} />
                <Stack.Screen name="register" component={Registration} />
                <Stack.Screen name="menu" component={Menu}/>
                <Stack.Screen name="profile" component={Profile}/>
                <Stack.Screen name="bill" component={Billing}/>
                <Stack.Screen name="pay" component={Pay}/>
                <Stack.Screen name="thankyou" component={Thankyou}/>
               
                

            </Stack.Navigator>
        </NavigationContainer>
    
  )
}