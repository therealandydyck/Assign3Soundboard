/**
 * \file App.js
 * \author Andy Dyck
 * \date 2024-02-27
 * \brief main soundboard function
 */
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import PageStyles from './styles/page-styles';
import Playback from './components/Playback';
import Recording from './components/Recording';
import AudioFiles from './components/AudioFiles';

export default function App() {
  return (
    <View style={PageStyles.page}>

    <View style={PageStyles.heading}>
      <Text style={PageStyles.heading}>A Sound Board!</Text>
    </View>
      
      <View style={PageStyles.recordRow}>
        <Playback style=''
          title='Playback'
          importUri={AudioFiles.audio.audio1}
        />

        <Playback style=''
          title='Playback' 
          importUri={AudioFiles.audio.audio2} 
        />

        <Playback style=''
          title='Playback'  
          importUri={AudioFiles.audio.audio3}
        />
      </View>
      
      <View style={PageStyles.recordRow}>
        <Recording style='' 
          title='Recording'
        />

        <Recording style='' 
          title='Recording'
        />

        <Recording style='' 
          title='Recording'
        />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}


