
import React from 'react';
import { StyleSheet, View,TouchableOpacity} from 'react-native';
import { FAB } from 'react-native-paper';

function FabButton({onPress})
{
  return(
    <FAB
    onPress={onPress}
    style={styles.fab}
      icon="plus" 
    />
  );
} 
const styles=StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 10,
      right: 0,
      bottom: 100,
    }
  })
export default FabButton;