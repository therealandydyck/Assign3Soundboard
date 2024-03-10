import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import ButtonStyles from '../styles/button-styles';
import PageStyles from '../styles/page-styles';


export default function App({importUri}) {
const [myPBO, setMyPBO] = useState(null);
const [playbackStatus, setPlaybackStatus] = useState("Unloaded");
const remoteUri = { uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3'};
const localUri = importUri;
  
// load a sounds into the PBO
const loadSound = async (uri, isLocal) => {
  if (isLocal) {
    const { sound } = await Audio.Sound.createAsync(localUri);
    setMyPBO(sound);
  } else {
    const { sound } = await Audio.Sound.createAsync(remoteUri);
    setMyPBO(sound);
  }
    setPlaybackStatus('Loaded');
}

// play a PBO
const playPBO = async () => {
  try {
    setPlaybackStatus("Playing");
  await myPBO.playAsync();
  } catch (e) {
  console.log(e); // suppresses error message if playing a sound that's unloaded
                  // better to handle errors than suppress them
  }
}

// pause a PBO
const pausePBO = async () => {
  setPlaybackStatus("Paused");
  await myPBO.pauseAsync();
}

// stop a PBO
const stopPBO = async () => {
  setPlaybackStatus("Stopped");
  await myPBO.stopAsync(); // should rewind it also
}

// unload a PBO
const unloadPBO = async () => {
  setPlaybackStatus("Unloaded");
  await myPBO.unloadAsync();
}

// load sound on start up (and unload when we are leaving)
useEffect(() => {
  loadSound(localUri,true); // no await is fine in useEffect
  return (
    myPBO ? () => {unloadPBO()} : undefined
  )
},[])

  return (
    <View style={PageStyles.container}>
      <Pressable style={ButtonStyles.button}
        onPress={(playbackStatus==="Playing") ? pausePBO : playPBO}
      >
        <Text style={ButtonStyles.buttonText}>{(playbackStatus==="Playing") ? "Pause" : "Play"}</Text>
      </Pressable>
      <Pressable style={ButtonStyles.button}
        onPress={stopPBO}
      >
        <Text style={ButtonStyles.buttonText}>Stop</Text>
      </Pressable>
      <Text style={ButtonStyles.buttonText}>Status: {playbackStatus}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

