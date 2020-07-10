import React, {useState} from 'react';
import {View, Button, Platform} from 'react-native';
//import DateTimePicker from '@react-native-community/datetimepicker';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import FabButton from "../components/FabButton"
function DatePicker(){

    
  
    

    return(
    <View>
    <Calendar
  markingType={'period'}
  markedDates={{
    '2012-05-15': {marked: true, dotColor: '#50cebb'},
    '2012-05-16': {marked: true, dotColor: '#50cebb'},
    '2012-05-21': {startingDay: true, color: '#50cebb', textColor: 'white'},
    '2012-05-22': {color: '#70d7c7', textColor: 'white'},
    '2012-05-23': {color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white'},
    '2012-05-24': {color: '#70d7c7', textColor: 'white'},
    '2012-05-25': {endingDay: true, color: '#50cebb', textColor: 'white'},
    }}
    />
     <FabButton style={{marginBottom:0}}/>
  </View>
);
}

export default DatePicker;