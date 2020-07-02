import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,FlatList} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
//import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider,useSafeArea } from 'react-native-safe-area-context';
//import { color } from 'react-native-reanimated';

function Completed() {
  const insets = useSafeArea();
  return (
    <View style={{paddingTop:insets.top ,paddingBottom:insets.bot,flex:1}}>
     <Text>Completed</Text>
    </View>
  );
}

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
function AfterTomorrow(){
  const movies= [
    {title: 'Movie title #1',actors:"Actor1,actor2",schedule:"09:-10pm",date:"25/12/2020"},
    {title: 'Movie title #2',actors:"Juan",schedule:"09:-10pm",date:"25/12/2020"},
    {title: 'Movie title #3',actors:"Gibran",schedule:"09:-10pm",date:"25/12/2020"},
    {title: 'Movie title #4',actors:"Amadeus",schedule:"09:-10pm",date:"25/12/2020"},
    {title: 'Movie title #5',actors:"Rodriguez",schedule:"09:-10pm",date:"25/12/2020"},
    {title: 'Movie title #7',actors:"Torres",schedule:"09:-10pm",date:"25/12/2020"}   
  ];
  return(
    <View style={styles.afterTomorrowCard}>
      <Text style={styles.textTitleAfterTomorrowCard}>{movies[1].date}</Text>
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

function Add(){
  const insets = useSafeArea();
  return(
    <View style={{paddingTop:insets.top ,paddingBottom:insets.bot,flex:1}}>
      <Text>Add</Text>
    </View>
  )
}

const Tab=createBottomTabNavigator();

function MyTabs(){
  return (
    <Tab.Navigator>
        <Tab.Screen 
          name="Completed"
          component={Completed} 
        />
        < Tab.Screen
          name="Upcoming"
          component={Upcoming}
        />
        <Tab.Screen
          name="Add"
          component={Add}
        />
      </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
    </SafeAreaProvider>
    
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
  }
});
