import React from "react";
import { Text, StyleSheet,View,Button,TouchableOpacity } from "react-native";
import { SafeAreaProvider,useSafeArea } from 'react-native-safe-area-context';

function Today(){
    return(
      
      <View style={styles.todayCard}> 
      
        <View style={{padding:15}}>
          
        <Text style={styles.textTitleCard}>Today</Text>
        <Text style={styles.whiteText}cd>Movie title</Text>
          <View
          style={{
            width:321,
            flex:1,
            flexDirection:'row',
            justifyContent:'space-between',
           // color:"white"
          }}
          >
          <Text style={styles.whiteText}>Actors</Text>
          <Text style={styles.whiteText}>09:00-10:00</Text>
          </View>
        </View>
        <View>
      
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    body: {
      padding: 20
    },
    todayCard:{
      
      margin: 20,
      backgroundColor: '#fd7365',
      flexDirection: 'row',
      height:10,
      flex:.5,
    },
    textTitleCard:{
      color:'white',
      fontWeight:'bold',
      paddingBottom:15,
      fontSize:20
    },
    tomorrowCard:{
      flex:1,
      flexDirection:'column',
      justifyContent:'space-between',
      paddingLeft:30,
      margin: 20,
      marginBottom: 0,
      marginTop:0,
      backgroundColor: 'white',
      //flexDirection: 'column',
      //height:10
    },
    textTitleTomorrowCard:{
      paddingTop:30,
      color:'#fd7365',
      fontWeight:'bold',
      paddingBottom:30,
      fontSize:20
    },
  
    afterTomorrowCard:{
      flex:1,
      flexDirection:'column',
      justifyContent:'space-between',
      paddingLeft:30,
      margin: 20,
      marginTop:0,
      backgroundColor: 'white',
      //flexDirection: 'column',
      //height:10,
    },
    textTitleAfterTomorrowCard:{
      paddingTop:30,
      color:'#fd7365',
      fontWeight:'bold',
      paddingBottom:30,
      fontSize:20
    },
    whiteText:{
      color:"white"
    },
    fab: {
      position: 'absolute',
      margin: 60,
      right: 0,
      bottom: 400,
    },
  });

export default Today;