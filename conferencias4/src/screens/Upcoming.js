import React from "react";
import { Text, StyleSheet,View,Button,TouchableOpacity,FlatList } from "react-native";
import { SafeAreaProvider,useSafeArea } from 'react-native-safe-area-context';
import Today from "../components/Today";
import Tomorrow from "../components/Tomorrow";
import AfterTomorrow from "../components/AfterTomorrow";

//import ImageDetail from "../components/ImageDetail";


function Upcoming(){
    const insets = useSafeArea();
    return(
      <View style={{paddingTop:insets.top ,paddingBottom:insets.bot,flex:1}}>
        <Today />
        <Tomorrow/>
        <AfterTomorrow/>
      </View>   
    )
  }

export default Upcoming;