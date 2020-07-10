
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
      margin: 20,
      right: 0,
      bottom: 80,
    }
  })
export default FabButton;