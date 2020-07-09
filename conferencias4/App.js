import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,FlatList, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { SafeAreaProvider,useSafeArea } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { color } from 'react-native-reanimated';

import BottomTabNavigator from "./src/navigation/TabNavigator"



export default function App() {
  return (
    
    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
    
    
  );
}


