import React from 'react'
import Start from './Start'
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Home from './Home';

import { Icon } from 'react-native-elements';
import Logout from './src/icons/logOut';
import WhatIsCovid from './WhatIsCovid';
import HowToProtect from './HowToProtect';
import TestMySelf from './TestMySelf';
import Find from './Find';
import { TouchableOpacity, Modal, Text, Alert, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


const Stack = createStackNavigator();
export default function StackNavig() {

  return (

    <Stack.Navigator
    >
      <Stack.Screen options={{ headerShown: false, }} name="Welcome" component={Start} />
      <Stack.Screen options={{ headerShown: false, }} name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home}


      />
      <Stack.Screen name="What" component={WhatIsCovid}
        options={{

          headerTitle: "What is COVID-19"
        }} />
      <Stack.Screen name="HowP" component={HowToProtect}
        options={{

          headerTitle: "How To Get Protected"
        }} />
      <Stack.Screen name="test" component={TestMySelf}
        options={{

          headerTitle: "Test My Self",

        }} />
      <Stack.Screen name="find" component={Find}
        options={{

          headerTitle: "Help numbers"
        }} />

    </Stack.Navigator>

  )
}
