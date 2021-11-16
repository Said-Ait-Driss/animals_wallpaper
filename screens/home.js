import React from 'react';
import { StyleSheet, View } from 'react-native';
import Walppapers from "../shared/walppapers";

export default function Home( { navigation }){

    // const navigation = useNavigation();

    return(
        <View style={ styles.container }>
            <Walppapers />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'flex-start',
        marginTop:5
    },
});