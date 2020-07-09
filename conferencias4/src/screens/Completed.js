import React from "react";
import { Text, StyleSheet,View,Button,TouchableOpacity } from "react-native";
import { SafeAreaProvider,useSafeArea } from 'react-native-safe-area-context';
import AfterTomorrow from "../components/AfterTomorrow";

function Completed() {
    const insets = useSafeArea();
    return (
      <View style={{paddingTop:insets.top ,paddingBottom:insets.bot,flex:1}}>
       <AfterTomorrow></AfterTomorrow>
       
      </View>
    );
  }


  
  
export default Completed;