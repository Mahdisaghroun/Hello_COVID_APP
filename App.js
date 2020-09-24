import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import Hello from './src/icons/Hello';
import * as Font from 'expo-font';
import { Dimensions } from 'react-native';
import ButtonStar from './src/icons/ButtonStart';
import { NavigationContainer } from '@react-navigation/native';
import Start from './Start';
import { AppLoading } from 'expo';
import StackNavig from './StackNavig';
 import { DefaultTheme } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};
let customFonts = {
  'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
  
};
export default class App extends React.Component {
  constructor(props){
    super(props)
    }
       state = {
        fontsLoaded: false,
      };
        async _loadFontsAsync() {
            await Font.loadAsync(customFonts);
            this.setState({ fontsLoaded: true });
           
          }
         componentDidMount() {
            this._loadFontsAsync();
          }
         render(){
     if (!this.state.fontsLoaded)return <AppLoading />;
         else
 return (
    <NavigationContainer theme={MyTheme}>
      <StackNavig></StackNavig>
    </NavigationContainer>
    
  );
}
}
  