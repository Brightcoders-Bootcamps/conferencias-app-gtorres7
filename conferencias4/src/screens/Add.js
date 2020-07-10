import React from "react";
import { Text, StyleSheet,View,TextInput,Button } from "react-native";
import { SafeAreaProvider,useSafeArea } from 'react-native-safe-area-context';
import { MainStackNavigator } from "../navigation/StackNavigation";
import FabButton from "../components/FabButton" 

function Add({navigation}){
   
    return(
      <View >
        <View style={{padding:20,margin:20,backgroundColor:"white",paddingBottom:500}} >
        <Text style={{
         fontSize:20 
        }}
        >New conference call</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Name of the conference"
        />
        <TextInput
          style={{height: 40}}
          placeholder="Topic to be discussed(optional)"
        />
       
        <FabButton onPress={() => navigation.navigate('InvitePeople')} />
        </View>
        
        
      </View>
    )
  }
export default Add;