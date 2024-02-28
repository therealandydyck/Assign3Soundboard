/**
 * \file App.js
 * \author Andy Dyck
 * \date 2024-02-27
 * \brief main soundboard function
 */
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import PageStyles from './styles/page-styles';

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
    </View>
  );
}


