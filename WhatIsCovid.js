import React from 'react'
import { StyleSheet, Text, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function WhatIsCovid() {
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <Text style={styles.h1}>What is COVID-19 ?{'\n'}</Text>
            <Image style={styles.Image}source={require('./images/covid-19.jpg')} />
          <Text style={styles.text}>
              {'\n'}
          A coronavirus is a kind of common virus that causes an infection in your nose, sinuses, or upper throat. Most coronaviruses aren't dangerous.

In early 2020, after a December 2019 outbreak in China, the World Health Organization identified SARS-CoV-2 as a new type of coronavirus. The outbreak quickly spread around the world.

COVID-19 is a disease caused by SARS-CoV-2 that can trigger what doctors call a respiratory tract infection. It can affect your upper respiratory tract (sinuses, nose, and throat) or lower respiratory tract (windpipe and lungs).

It spreads the same way other coronaviruses do, mainly through person-to-person contact. Infections range from mild to deadly.

SARS-CoV-2 is one of seven types of coronavirus, including the ones that cause severe diseases like Middle East respiratory syndrome (MERS) and sudden acute respiratory syndrome (SARS). The other coronaviruses cause most of the colds that affect us during the year but aren’t a serious threat for otherwise healthy people.{'\n'}{'\n'}
<Text style={styles.h1}>Is there more than one strain of SARS-CoV-2?</Text>{'\n'}

It’s normal for a virus to change, or mutate, as it infects people. A Chinese study of 103 COVID-19 cases suggests the virus that causes it has done just that. They found two strains, which they named L and S. The S type is older, but the L type was more common in early stages of the outbreak. They think one may cause more cases of the disease than the other, but they’re still working on what it all means.{'\n'}{'\n'}

<Text style={styles.h1}>How long will the coronavirus last?</Text>{'\n'}

It’s too soon to tell how long the pandemic will continue. It depends on many things, including researchers’ work to learn more about the virus, their search for a treatment and a vaccine, and the public’s efforts to slow the spread.

More than 100 vaccine candidates are in various stages of development and testing. This process usually takes years. Researchers are speeding it up as much as they can, but it still might take 12 to 18 months to find a vaccine that works and is safe.{'\n'}{'\n'}

<Text style={styles.h1}>Symptoms of COVID-19</Text>{'\n'}
The main symptoms include:{'\n'}

*Fever {'\n'}
*Coughing {'\n'}
*Shortness of breath{'\n'}
*Trouble breathing {'\n'}
*Fatigue {'\n'}
*Chills, sometimes with shaking {'\n'}
*Body aches {'\n'}
*Headache {'\n'}
*Sore throat {'\n'}
*Loss of smell or taste {'\n'}
*Nausea {'\n'}
*Diarrhea {'\n'}
The virus can lead to pneumonia, respiratory failure, septic shock, and death. Many COVID-19 complications may be caused by a condition known as cytokine release syndrome or a cytokine storm. This is when an infection triggers your immune system to flood your bloodstream with inflammatory proteins called cytokines. They can kill tissue and damage your organs.

If you notice the following severe symptoms in yourself or a loved one, get medical help right away:{'\n'}

Trouble breathing or shortness of breath{'\n'}
Ongoing chest pain or pressure{'\n'}
*New confusion{'\n'}
*Can’t wake up fully{'\n'}
*Bluish lips or face{'\n'}{'\n'}

<Text style={styles.h2}>Strokes have also been reported in some people who have COVID-19. Remember FAST:</Text>{'\n'}

<Text style={styles.h2}>*Face.</Text> Is one side of the person’s face numb or drooping? Is their smile lopsided? {'\n'}
<Text style={styles.h2}>*Arms.</Text> Is one arm weak or numb? If they try to raise both arms, does one arm sag?{'\n'}
<Text style={styles.h2}>*Speech.</Text> Can they speak clearly? Ask them to repeat a sentence.{'\n'}
<Text style={styles.h2}>*Time.</Text> Every minute counts when someone shows signs of a stroke. Call 911 right away.{'\n'}{'\n'}
<Text style={styles.h2}></Text>If you’re infected, symptoms can show up in as few as 2 days or as many as 14. It varies from person to person.{'\n'}{'\n'}

According to researchers in China, these were the most common symptoms among people who had COVID-19:

Fever 99%
Fatigue 70%
Cough 59%
Lack of appetite 40%
Body aches 35%
Shortness of breath 31%
Mucus/phlegm 27%
Some people who are hospitalized for COVID-19 have also have dangerous blood clots, including in their legs, lungs, and arteries.
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
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
  });
  