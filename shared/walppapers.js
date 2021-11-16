import React ,{ useEffect, useState } from "react";
import { View ,StyleSheet ,Text ,Image ,FlatList ,TouchableOpacity, Alert ,ActivityIndicator } from "react-native";
import { Dimensions } from 'react-native';
import { GetHomeWalppapersAction } from "../store/actions/walppaperActions";
import { useDispatch ,useSelector } from "react-redux";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Walppapers() {

    const [showLoader,setShowLoader] =useState(true);

    const homeDispatch = useDispatch();
    const walppapers =useSelector(state=>state.walppaers);

    useEffect(()=>{
        homeDispatch( GetHomeWalppapersAction() );
    },[homeDispatch]);

    const showWalppaper=()=>{
        // homeDispatch( GetHomeWalppapersAction() );
    }
    useEffect(() => {
        const subscription = Dimensions.addEventListener(
        "change",
        ({ window, screen }) => {
            setDimensions({ window, screen });
        }
        );
        return () => subscription?.remove();
    });
    
    const images=[
        {
            image:require("../assets/said.jpg"),
            id:1
        },
        {
            image:require("../assets/said.jpg"),
            id:2
        },
        {
            image:require("../assets/said.jpg"),
            id:3
        },
        {
            image:require("../assets/said.jpg"),
            id:4
        },
        {
            image:require("../assets/said.jpg"),
            id:5
        },
        {
            image:require("../assets/said.jpg"),
            id:6
        },
        {
            image:require("../assets/said.jpg"),
            id:7
        },
    ]
    if(walppapers.complete){
        Alert.alert(JSON.stringify(walppapers.walppapers))
    }
    if (showLoader){
        return (
            <ActivityIndicator animating={showLoader} size="small" color="#00ff00" />
        )
    }
    return (
        <View style={ styles.container }>
            <FlatList  
                numColumns={2} // split to two columns rather than 1
                keyExtractor={ (item)=>item.id } 
                data={ images } 
                renderItem={ ({item})=>(
                    <View>
                        <TouchableOpacity onPress={()=>showWalppaper()}>
                            <Image source={ item.image } style={styles.image}/>
                            {/* <Text>dlk,dfdklf</Text> */}
                        </TouchableOpacity>
                    </View>
                ) } 
                />
        </View>
    );
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"flex-start"
    },
    image:{
        height:200,
        maxWidth:Dimensions.get('window').width/2,
        borderColor:"#333",
        borderWidth:2,
        borderRadius:4,
    }
})

export default Walppapers;