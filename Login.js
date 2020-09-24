import React from 'react'
import { StyleSheet,TextInput, Text, View, TouchableOpacity, Dimensions, ActivityIndicator,Modal ,
    Pressable
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import LoginUI from './src/icons/Login';
import { Icon } from 'react-native-elements'
import Input from './src/icons/Input';
import {firebase} from './src/Firebase/firebase.config'
import ButtonStar from './src/icons/ButtonStart';
import VerifMail from './src/icons/VerifMail';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class Login extends React.Component {
    constructor(props){
        super(props)
        this.state={
            Email:"",
            Loading:false,
            Error:null,
            isVisible:false
        }
    }
    
    
    __Register= ()=>{
     
     this.setState({Loading:true})
        firebase.auth().createUserWithEmailAndPassword(this.state.Email,"000000").then(
            async(response)=>{
               
                response.user.sendEmailVerification();
                try{
                await AsyncStorage.setItem('User',JSON.stringify(response.user))}
                catch(error){
                    alert('error');
                }
                this.setState({Loading:false, isVisible:true})
             

            },
            (error)=>{
                this.setState({Loading:false})
                this.setState({Error:error.message});
            }
        )
    }
    render(){
    return (
        <View style={style.container}>
            
               <LoginUI width={windowWidth} height={windowHeight/2}></LoginUI>
               <View style={style.botBlock} >
               <Text style={style.text}>Please Enter Your Email To Continue </Text>
              <View style={style.ViewInput} >
                  
               <TextInput style={style.InputOne}placeholder="Email" onChangeText={(text)=>{
                   this.setState({Email:text});
               }}></TextInput>
              
              
               </View>
               {this.state.Error!=null &&<Text style={style.error}>{this.state.Error}</Text>}
               <TouchableOpacity style={style.btn} onPress={()=>{
                 this.__Register()
               }}>
               <ButtonStar title="Continue"></ButtonStar>
               </TouchableOpacity>
               </View>
             { this.state.Loading==true&&<View style={style.contLoad} ><ActivityIndicator style={style.loading} size="large" color="#4d5076" /></View>}
             <Modal style={style.Modal}
            animationType = {"slide"}
            transparent={false}
            visible={this.state.isVisible}
            >
             <VerifMail  width={windowWidth} height={windowHeight/2}></VerifMail>
              <Text style = { style.textVerif }>
                Please Check Your Mail Inbox To Verify Your Account !</Text>
                <TouchableOpacity style={style.touchOK}
                onPress={()=>{
                    this.setState({isVisible:false});
                    this.props.navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home' }],
                      });
                }}
                
                ><Text style={style.touchText}>Ok I confirm!</Text></TouchableOpacity>
          </Modal>
        
        </View>
    )
}}
const style = StyleSheet.create(
    {
        container:{
            
            flex:1,
           
            justifyContent:"center",
            backgroundColor:"#E4E4E4"

         
         
         
        },
        Modal:{
            justifyContent:"center",
            alignItems:"center",
            alignContent:"center"
        },
        error:{
            color:"red",
           

        },
        textVerif:{
            fontSize:25,
            maxWidth:windowWidth,
            textAlign:"center",
            color:"#4d5076",
            fontFamily:'Lato-Regular',
           top:30,

        },
        contLoad:{
            flex:1,
            position:"absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
           backgroundColor:"black",
           opacity:0.5

        },
        loading:{
            position:"absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center'
        },
        ViewInput:{
                borderRadius:20,
                borderStyle:"solid",
                borderColor:"#4d5076",
                width:windowWidth/1.2,
                height:50,
                borderWidth:1.8,
             
                paddingLeft:15,
                paddingRight:15,
                shadowColor:"#4d5076",
               
               alignContent:"center",
               justifyContent:"center",
               fontSize:16
        },
        botBlock:{
            flex:1,
   
                
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#ffff",
            borderTopLeftRadius:160
           
        },
        InputOne:{
           
            fontSize:14,
            color:"#4d5076",
            opacity:1,
            fontFamily:'Lato-Regular',


        },
        text:{
            fontSize:16,
            maxWidth:windowWidth,
            textAlign:"center",
            color:"#4d5076",
            fontFamily:'Lato-Regular',
            bottom:28,
            
           
        },
        btn:{
           top:30
        },

        touchOK:{
            alignSelf:"center",
            top:80,
            position:"relative",
            backgroundColor:"#4d5076",
            width:235, 
            height:45,
            borderRadius:17,
            justifyContent:"center"
            
        },
        touchText:{
            fontSize:17,
            fontFamily:"Lato-Regular",
            color:"white",
            alignSelf:"center",
            textAlign:"center"
        }
       

    }
)