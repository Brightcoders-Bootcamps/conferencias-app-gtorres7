import React from 'react';
import { StyleSheet, View,Text,TextInput,FlatList} from 'react-native';
import { SafeAreaProvider,useSafeArea } from 'react-native-safe-area-context';
import { List } from 'react-native-paper';
import FabButton from "../components/FabButton" 
import SelectDate from "../screens/SelectDate"



function InvitePeople({ navigation: { navigate } }){
  const people=[
    {
     name:"Gibran",
     email:"gibran@gibran.com"
    },
    {
     name:"tarzan",
     email:"tarzan@tar.zan"
    },
    {
      name:"Goku",
      email:"go@ku.com"
    },
    {
      name:"Gohan",
      email:"go@ku.com"
    },
    {
      name:"naruto",
      email:"naruto@kun.com"
    }
   ]


   const insets = useSafeArea();
    return(
      
        <View style={{paddingTop:insets.top ,paddingBottom:insets.bot,flex:1}}>
            
        <TextInput
          style={{height: 40}}
          placeholder="Email or Phonenumber"
        />
        
       
       <FlatList
       data={people}
       renderItem={({item})=>{
         return (

           <View>
             <List.Item
           title={item.name}
           description={item.email}
           right={props => <List.Icon {...props} icon="plus" />}
           />
           </View>
           
         )
       }} 
       keyExtractor={people => people.name}/>
       <FabButton  onPress={() => navigate('SelectDate')}/>
  
       
        </View>
        
        
        
    );
}

export default InvitePeople;