import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import Hello from './src/icons/Hello';
import { Dimensions } from 'react-native';

import ButtonStar from './src/icons/ButtonStart';

import React  from 'react';
import AsyncStorage from '@react-native-community/async-storage';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

 

export default function Start({navigation}) {
  const getUser=async()=>{
    try{
 const user =await AsyncStorage.getItem('User')

  if(user!=null){
 
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  }}catch(error){

  }}
  getUser()
  return (
    
    <View style={styles.container}>
    <View style={styles.svg}>
     <Hello width={windowWidth} height={windowHeight/2}></Hello>
      <StatusBar style="auto" />

    </View>
    <View style={styles.bot_view}>
      
<Text style={styles.text}>
  Hello{'\n'}
  
  We Are here To Advice You From COVID-19 

</Text>
  
 <TouchableOpacity style={styles.touchable} onPress={()=>{
   navigation.navigate('Login')
 }}>
      <ButtonStar title="Get Started"></ButtonStar>
      </TouchableOpacity>
  </View>
    </View>
  );

}
const styles = StyleSheet.create({
  svg: {
  
    backgroundColor: '#fff',
   
    top:30
  },
  container:{
    flex:1,
   alignItems:"center",
  height:windowHeight

  },
  bot_view:{
  
    justifyContent:"space-between",
    alignContent:'center',

    
   
    height:(windowHeight/2)-50,
  },
  touchable:{
 alignSelf:"center",
  },
  text:{
    textAlign:"center",
    fontSize:26,
    top:'30%',
    fontFamily:'Lato-Regular',
    color:'#4d5076',
    lineHeight:45
 
  }
});
