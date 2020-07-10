import React from "react";
import { Text, StyleSheet,View,Button,TouchableOpacity,FlatList } from "react-native";
import { SafeAreaProvider,useSafeArea } from 'react-native-safe-area-context';

function Tomorrow(){
    const movies= [
      {title: 'Movie title #1',actors:"Actor1,actor2",schedule:"09:-10pm",date:"25/12/2020"},
      {title: 'Movie title #2',actors:"Juan",schedule:"09:-10pm",date:"25/12/2020"},
      // {title: 'Movie title #3',actors:"Gibran",schedule:"09:-10pm",date:"25/12/2020"},
      // {title: 'Movie title #4',actors:"Amadeus",schedule:"09:-10pm",date:"25/12/2020"},
      // {title: 'Movie title #5',actors:"Rodriguez",schedule:"09:-10pm",date:"25/12/2020"},
      // {title: 'Movie title #7',actors:"Torres",schedule:"09:-10pm",date:"25/12/2020"}   
    ];
    return(
      
       <View style={styles.tomorrowCard}>
         <Text style={styles.textTitleTomorrowCard}>Tomorrow</Text>
         <FlatList
          showsVerticalScrollIndicator={false} 
          data={movies}
          style={{marginRight:30}}
          renderItem={({item})=>{
          return (
            <View >
              <Text style={{fontSize:15,fontWeight:"bold"}}>{item.title}</Text>
              <View style={{
                flex:1,
                flexDirection:"row",
                justifyContent:"space-between",
                marginTop:10,
                marginBottom:10,
                borderBottomWidth:1,
                borderBottomColor:"#7f8d9d"
                }}>
              <Text style={{
                color:"#7f8d9d"
              }}>{item.actors}</Text>
              <Text style={{fontSize:20 }}
              >{item.schedule}</Text>
              </View>
            </View>
          ) 
          
          }}
          keyExtractor={movies => movies.title} 
       />
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

  export default Tomorrow;