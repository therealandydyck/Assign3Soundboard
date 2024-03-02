/**
 * \file    button-styles.js
 * \author  Andy Dyck
 * \date    2024-02-27
 * \brief   stylesheet for app buttons
 */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button1: {
        borderStyle: 'solid',
        borderWidth: 3,
        borderRadius: 2,
        backgroundColor: 'yellow',
        padding: 20,
    },

    button: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'black',
        backgroundColor: 'lightgreen',
        margin: 10,
        padding: 10,
    },
    buttonText: {
        fontSize: 24,
    },
  });

  export default styles;