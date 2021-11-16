import 'react-native-gesture-handler';
import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";
import React from 'react';
import Header from '../shared/header';

const screens ={
    About:{
        screen: About,
        navigationOptions:( { navigation} )=>{
            return {
                headerTitle:()=><Header navigation={navigation} title="About Animals Walppaper"/>
            }
        }
    }
}


const AboutStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#ddd',
        headerStyle:{
            backgroundColor:"#ccc",
            height:80
        }
    }
})
// AppRegistry.registerComponent(appName, () => App);

export default AboutStack;