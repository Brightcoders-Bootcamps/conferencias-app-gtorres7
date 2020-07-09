import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MainStackNavigator} from "../navigation/StackNavigation"
import Completed from "../screens/Completed"
import Upcoming from "../screens/Upcoming"

const Tab=createBottomTabNavigator();
function BottomTabNavigator(){
  return (
    <Tab.Navigator>
        <Tab.Screen name="Completed" component={Completed}/>
        <Tab.Screen name="Upcoming" component={Upcoming}/>
        <Tab.Screen name="Add" component={MainStackNavigator}/>
      </Tab.Navigator>
  );
}
export default BottomTabNavigator;