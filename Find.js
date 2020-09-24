import React, { Component } from "react";
import { AppRegistry, StyleSheet, Dimensions, Image, View, StatusBar, TouchableOpacity } from "react-native";
import { Container, Text } from "native-base";
import { Icon } from 'react-native-elements';
import {Linking} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
class Find extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  render() {

    return (
<View style={styles.Container}>
    <TouchableOpacity style={[styles.touch,styles.touch1]} onPress={()=>{
 Linking.openURL('tel:80101919')
    }}>

    <Text style={styles.text}>Green Number {'\n'}
                </Text>
                <View style={styles.itemFlex}>
            <Icon name="phone" color="white"></Icon>
            <Text style={styles.text}> 80101919 </Text></View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.touch,styles.touch2]}  onPress={()=>{
        Linking.openURL(`tel:190`)
    }}>

            <Text style={styles.text}>Emergency Medical{'\n'}

            </Text>
            <View style={styles.itemFlex}>
            <Icon name="phone" color="white"></Icon>
            <Text style={styles.text}>190 </Text></View>
         </TouchableOpacity>
</View>
    );
  }
}

const styles = StyleSheet.create({
  Container:{
      flex:1,
         alignItems:"center",
            justifyContent:"center"
  },
  touch:{
    width:windowWidth-100,
    height:100,
    borderStyle:"solid",
    borderWidth:1,
    borderRadius:17,
    marginBottom:20 ,

justifyContent:"center"

 } ,
 touch1:{
    backgroundColor:'green'
 },
 touch2:{
    backgroundColor:'red'
 },
 text:{
     color:'white',
     fontSize:20,
     textAlign:"center"

 },
 itemFlex:{
     flexDirection:"row",
     alignItems:"center",
     textAlign:"center",
     justifyContent:"center"

 }

});

export default Find;