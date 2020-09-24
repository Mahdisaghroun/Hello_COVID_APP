import React from 'react'
import Trace from './src/icons/trace'
import { Dimensions, Text, View, StyleSheet, TouchableOpacity, Alert, ToastAndroid } from 'react-native';
import WhatIsCovid from './src/icons/WhatIsCovid';
import HowToProtect from './src/icons/HowToProtect';
import TestMySelf from './src/icons/TestMyself';
import FindHospital from './src/icons/FindHospital';
import Background from './src/icons/Background';
import { Icon } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-community/async-storage';
import Logout from './src/icons/logOut';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Home({ navigation }) {
    navigation.setOptions({
        headerRight: () => (
            <Logout
                name="log-out-outline"

                onPress={() => {
                    Alert.alert(
                        'Confirm Log out',
                        'Are you sure you want to log out?',
                        [
                            {
                                text: 'Logout',
                                onPress: () => {
                                    AsyncStorage.clear()
                                    navigation.reset({
                                        index: 0,
                                        routes: [{ name: 'Login' }],
                                    });
                                    ToastAndroid.show("Log out successfully", ToastAndroid.SHORT);

                                }
                            },
                            {
                                text: 'No',

                                style: 'cancel'
                            }
                        ],
                        { cancelable: false }
                    );
                }}

            ></Logout>
        ),
    })
    return (

        < View style={style.container} >
            <StatusBar barStyle="light-content" backgroundColor="#ffff" />

            <View style={style.topHome}>
                <Icon name="home" size={90} color="#0168B7"></Icon>

                <Text style={style.textHome}>Home</Text>
            </View>
            <View style={style.v1}
            >

                <WhatIsCovid style={style.boxL} onPress={() => {
                    navigation.navigate('What')
                }}></WhatIsCovid>
                <HowToProtect style={style.boxR} onPress={() => {
                    navigation.navigate('HowP')
                }}></HowToProtect>
            </View>
            <View style={style.v2}>
                <TestMySelf style={style.boxL} onPress={() => {
                    navigation.navigate('test')
                }}></TestMySelf>
                <FindHospital style={style.boxR} onPress={() => {
                    navigation.navigate('find')
                }}></FindHospital>
            </View>
        </View >
    )
}
const style = StyleSheet.create(
    {
        container: {

            flex: 1,
            justifyContent: "center",
            alignItems: "center"

        },
        v1: {

            flexDirection: "row",
            padding: 10

        }
        ,
        v2: {

            flexDirection: "row",
            padding: 10
        },
        boxL: {
            right: 20,

        },
        boxR: {
            left: 20
        },
        back: {
            position: "absolute"
        },
        topHome: {
            top: 10,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute"

        },
        textHome: {
            fontSize: 20,

        }


    },
)
