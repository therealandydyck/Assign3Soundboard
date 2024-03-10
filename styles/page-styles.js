/** 
 * \file    page-styles.js
 * \author  Andy Dyck
 * \date    2024-02-27
 * \brief   stylesheet for app page styling
 */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 0.3,
      
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    page: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    text: {
        fontSize: 24,
    },

    recordRow: {
      flex: 1,
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',

    },
    
  });

export default styles;