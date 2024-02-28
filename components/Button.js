/**
 * \file    Button.js
 * \author  Andy Dyck
 * \date    2024-02-27
 * \brief   button function for soundboard app
 */
import { Pressable, Text, View } from "react-native";
import ButtonStyles from './styles/button-styles.js';


export const Button = () => {

    return (
        <View style={{padding: 10}}>
            <Pressable style={[ButtonStyles.button]}
                title=""
                onPress={}/>
        </View>
    )
}