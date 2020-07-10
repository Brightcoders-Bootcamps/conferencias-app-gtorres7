import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SelectDate from "../screens/SelectDate";
import Confirmation from "../screens/Confirmation";
import SelectTime from "../screens/SelectTime";
import InvitePeople from "../screens/InvitePeople"
import Add from "../screens/Add"

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Add" component={Add} />        
      <Stack.Screen name="InvitePeople" component={InvitePeople} />
      <Stack.Screen name="SelectDate" component={SelectDate} />
      <Stack.Screen name="SelectTime" component={SelectTime} />
      <Stack.Screen name="Confirmation" component={Confirmation} />    
    </Stack.Navigator>
  );
}

export { MainStackNavigator };