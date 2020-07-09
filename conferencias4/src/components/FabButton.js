
import React from 'react';
import { StyleSheet, View} from 'react-native';
import { FAB } from 'react-native-paper';
function FabButton({navigation})
{
  return(
    <View>
      
    <FAB
    style={styles.fab}
      icon="plus"
      
    />
    </View>
    
  );
} 
const styles=StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 60,
      right: 0,
      bottom: 400,
    }
  })
export default FabButton;