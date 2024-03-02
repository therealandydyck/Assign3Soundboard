/**
 * \file App.js
 * \author Andy Dyck
 * \date 2024-02-27
 * \brief main soundboard function
 */
import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import PageStyles from './styles/page-styles';
import ButtonStyles from './styles/button-styles';
import Playback from './components/Playback';
import Recording from './components/Recording';

export default function App() {
  return (
    <View style={PageStyles.page}>
      
      <Playback style=''
        title='Playback'  
      />
      
      
      <Recording style='' 
        title='Recording'
        buttonId='1'
      />

      <Recording style='' 
        title='Recording'
        buttonId='1'
      />
      
      <StatusBar style="auto" />
    </View>
  );
}


