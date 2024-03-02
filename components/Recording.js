import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import ButtonStyles from '../styles/button-styles';
import PageStyles from '../styles/page-styles';



export default function App() {
  const [recording, setRecording] = useState(null); // the sound recording object
  const [recordingUri, setRecordingUri] = useState(null); // the recorded file location
  const [playback, setPlayback] = useState(null); // the playback object
  const [permissionsResponse, requestPermission] = Audio.usePermissions(); // because consent

const startRecording = async () => {
  try {
    // make sure we have permission
    if (permissionsResponse.status !== 'granted') {
      console.log('Requesting permissions');
      await requestPermission();
    }
    console.log('Permission is ' , permissionsResponse.status);

    // set device specific values
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,

    });

    console.log('Starting...');
    const { recording } = await Audio.Recording.createAsync(
      Audio.RecordingOptionsPresets.HIGH_QUALITY
    );
    setRecording(recording);
    console.log("recording!");

  } catch (error) {
    console.log("Error during startRecording(): " , error);
  }
}

const stopRecording = async () => {
  try {
    await recording.stopAndUnloadAsync(); // actually stop

    const uri = recording.getURI(); // save the recorded object location
    setRecordingUri(uri);

    setRecording(undefined);

    console.log("Recording stopped and stored at: " , uri);
  } catch (error) {
    console.log("Error during stopRecording(): " , error);
  }
}

const playRecording = async () => {
  const { sound } = await Audio.Sound.createAsync({
    uri: recordingUri,
  })
  setPlayback(sound);
  await sound.replayAsync();
  console.log("Playing recording from " , recordingUri);

}

// clean up
useEffect(() => {
  return recording 
  ? recording.stopAndUnloadAsync()
  : undefined;
},[])

  return (
    <View style=''>
      <Pressable 
        onPress={recording? stopRecording : startRecording}
      >
        <View style={ButtonStyles.button}>
          <Text style={ButtonStyles.buttonText}>{recording?('Stop'):('Record')}</Text>
        </View>
      </Pressable>
      
        
      {
        recordingUri &&
        <Pressable
          onPress={playRecording}
        >
          <View style={ButtonStyles.button}>
            <Text style={ButtonStyles.buttonText}>Play</Text>
          </View>
        </Pressable>
      }

    </View>
  );
}