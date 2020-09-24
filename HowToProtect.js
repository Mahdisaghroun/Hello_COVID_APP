import React from 'react'
import {Text,View,StyleSheet, SafeAreaView,ScrollView, Image, Dimensions} from "react-native";
import { Video } from 'expo-av';
import { WebView } from 'react-native-webview';
import YouTube from 'react-native-youtube';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function HowToProtect() {

    return (
       
      
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.h1}>
        Everyone Should{'\n'}
        </Text>
        <Text style={styles.text}>
       <Text style={styles.advice}>Wash your hands</Text>  often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing.{'\n'}
        </Text>
<Image style={styles.Image}source={require('./images/3667413.jpg')} />
<Text style={styles.h2}>{'\n'}It’s especially important to wash: {'\n'}</Text>
<Text style={styles.text}>
  *Before eating or preparing food{'\n'}
  *Before touching your face{'\n'}
  *After using the restroom{'\n'}
  *After leaving a public place{'\n'}
  *After blowing your nose, coughing, or sneezing{'\n'}
  *After handling your mask{'\n'}
  *After changing a diaper{'\n'}
  *After caring for someone sick{'\n'}
  *After touching animals or pets{'\n'}
If soap and water are not readily available, use a hand sanitizer that contains at least 60% alcohol. Cover all surfaces of your hands and rub them together until they feel dry.{'\n'}
Avoid touching your eyes, nose, and mouth with unwashed hands.{'\n'}
<Text style={styles.advice}>Avoid close contact</Text>{'\n'}</Text>
<Image style={styles.Image}source={require('./images/Avoidclosecontact.jpg')} />
<Text style={styles.text}>
<Text style={styles.h2}>Inside your home:</Text>{'\n'}
*Avoid close contact with people who are sick.{'\n'}
*If possible, maintain 6 feet between the person who is sick and other household members.{'\n'}
<Text style={styles.h2}>Outside your home: </Text>{'\n'}
*Put 6 feet of distance between yourself and people who don’t live in your household.{'\n'}
*Remember that some people without symptoms may be able to spread virus.{'\n'}
*Stay at least 6 feet (about 2 arms’ length) from other people.{'\n'}
*Keeping distance from others is especially important for people who are at higher risk of getting very sick.{'\n'}
<Text style={styles.advice}>Cover your mouth and nose with a mask when around others{'\n'}</Text>
        </Text>
        <Image style={styles.Image}source={require('./images/mask.jpg')} />
        <Text style={styles.text}>{'\n'}
        *You could spread COVID-19 to others even if you do not feel sick.{'\n'}
*The mask is meant to protect other people in case you are infected.{'\n'}
*Everyone should wear a mask in public settings and when around people who don’t live in your household, especially when other social distancing measures are difficult to maintain.{'\n'}
*Masks should not be placed on young children under age 2, anyone who has trouble breathing, or is unconscious, incapacitated or otherwise unable to remove the mask without assistance.{'\n'}
*Do NOT use a mask meant for a healthcare worker. Currently, surgical masks and N95 respirators are critical supplies that should be reserved for healthcare workers and other first responders.{'\n'}
*Continue to keep about 6 feet between yourself and others. The mask is not a substitute for social distancing.{'\n'}
{'\n'}
<Text style={styles.advice}>Cover coughs and sneezes {'\n'}</Text>

        </Text>
        <Image style={styles.Image}source={require('./images/nseezing.jpg')} />
        <Text style={styles.text}>{'\n'}
        *Always cover your mouth and nose with a tissue when you cough or sneeze or use the inside of your elbow and do not spit.{'\n'}
        *Throw used tissues in the trash.{'\n'}
        *Immediately wash your hands with soap and water for at least 20 seconds. If soap and water are not readily available, clean your hands with a hand sanitizer that contains at least 60% alcohol.{'\n'}
        <Text style={styles.advice}>Clean and disinfect {'\n'}</Text> 
        </Text>
        <Image style={styles.Image}source={require('./images/clean.jpg')} />
        <Text style={styles.text}>{'\n'}
        *Clean AND disinfect frequently touched surfaces daily. This includes tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, and sinks.{'\n'}
*If surfaces are dirty, clean them. Use detergent or soap and water prior to disinfection.{'\n'}
*Then, use a household disinfectant. Most common EPA-registered household disinfectantsexternal icon will work.{'\n'}
<Text style={styles.advice}>Monitor Your Health Daily</Text>
{'\n'}
</Text>
<Image style={styles.Image}source={require('./images/doctor.jpg')} />
<Text style={styles.text}>{'\n'}
<Text style={styles.h2}>Be alert for symptoms.</Text> Watch for fever, cough, shortness of breath, or other symptoms of COVID-19.{'\n'}
*Especially important if you are running essential errands, going into the office or workplace, and in settings where it may be difficult to keep a physical distance of 6 feet.{'\n'}
<Text style={styles.h2}>Take your temperature</Text> if symptoms develop.{'\n'}
*Don’t take your temperature within 30 minutes of exercising or after taking medications that could lower your temperature, like acetaminophen.{'\n'}
*Follow CDC guidance if symptoms develop.
</Text>
    </ScrollView>
     </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  scrollView: {
    backgroundColor: '#FFFF',
   marginHorizontal:8
  },
  text: {
    fontSize: 16,
    lineHeight:30


  },
  h1:{
      fontSize:20,
      fontWeight:"bold",
      textAlign:"center",
      top:10
  },
  h2:{
      fontWeight:"bold",
  },
  Image:{
    width:windowWidth,
    height:200,
    alignSelf:"center"
  },
  advice:{
    fontSize:19,
    color:"blue",
    textTransform:"uppercase"
  }
  });
