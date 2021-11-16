import 'react-native-gesture-handler';
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import Details from "../screens/details";
import React from 'react';
import Header from '../shared/header';

const screens ={
    Home:{
        screen: Home,
        navigationOptions:( { navigation} )=>{
            return {
                headerTitle:()=><Header navigation={navigation} title="Animals Walppaper "/>
            }
        }
    },
    Details:{
        screen: Details
    }
}


const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#ddd',
        headerStyle:{
            backgroundColor:"#ccc",
            height:80,
            // paddingBottom:5
        }
    }
})
// AppRegistry.registerComponent(appName, () => App);

export default HomeStack;