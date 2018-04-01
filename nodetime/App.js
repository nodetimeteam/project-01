import React from 'react';
import { PermissionsAndroid, Platform, View, Button } from 'react-native'
import { StackNavigator } from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen';
import WorldScreen from './src/screens/WorldsScreen';
import GameScreen from './src/screens/GameScreen';
import googleSpeech from './src/services/googleSpeech'
import { AudioRecorder, AudioUtils } from 'react-native-audio';
import Sound from 'react-native-sound'
// import { Base64 } from 'js-base64';
// const Base64 = require('js-base64').Base64
// let audioPath = AudioUtils.DocumentDirectoryPath + '/active.amr_wb';
// let audioPath = './active.amr_wb'
// AudioRecorder.prepareRecordingAtPath(audioPath, {
//   SampleRate: 22050,
//   Channels: 1,
//   AudioQuality: "Low",
//   AudioEncoding: "amr_wb"
// });



export default class App extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      currentTime: 0.0,
      recording: false,
      paused: false,
      stoppedRecording: false,
      finished: false,
      audioPath: AudioUtils.DocumentDirectoryPath + '/active.amr_wb',
      hasPermission: undefined,
    };
    this._checkPermission = this._checkPermission.bind(this)
    this._finishRecording = this._finishRecording.bind(this)
    this.getBase64 = this.getBase64.bind(this)
    this._record = this._record.bind(this)
    this._stop = this._stop.bind(this)
    this._play = this._play.bind(this)
  }

  getBase64(file) {
    // 
    // let blob = Base64.encodeToString(file)
    // blob
    
    var reader = new FileReader();

    
    reader.readAsDataURL(file);
    
    let awasome = reader.result
    awasome
    
    reader.onload = function () {
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }


  async _record() {
    if (this.state.recording) {
      console.warn('Already recording!');
      return;
    }

    if (!this.state.hasPermission) {
      console.warn('Can\'t record, no permission granted!');
      return;
    }

    if (this.state.stoppedRecording) {
      this.prepareRecordingPath(this.state.audioPath);
    }

    this.setState({ recording: true, paused: false });

    try {
      
      const filePath = await AudioRecorder.startRecording();
      
    } catch (error) {
      console.error(error);
    }
    
  }
  async _stop() {
    if (!this.state.recording) {
      console.warn('Can\'t stop, not recording!');
      return;
    }

    this.setState({ stoppedRecording: true, recording: false, paused: false });

    try {
      const filePath = await AudioRecorder.stopRecording();
      
      if (Platform.OS === 'android') {
        
        // let base64Data = this.getBase64(filePath)
        // base64Data
        
        this._finishRecording(true, filePath);
      }
      return filePath;
    } catch (error) {
      console.error(error);
    }
  }
  async _play() {
    if (this.state.recording) {
      await this._stop();
    }

    // These timeouts are a hacky workaround for some issues with react-native-sound.
    // See https://github.com/zmxv/react-native-sound/issues/89.
    setTimeout(() => {
      var sound = new Sound(this.state.audioPath, '', (error) => {
        if (error) {
          console.log('failed to load the sound', error);
        }
      });

      setTimeout(() => {
        sound.play((success) => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      }, 100);
    }, 100);
  }

  _checkPermission() {
    if (Platform.OS !== 'android') {
      return Promise.resolve(true);
    }

    const rationale = {
      'title': 'Microphone Permission',
      'message': 'AudioExample needs access to your microphone so you can record audio.'
    };

    return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, rationale)
      .then((result) => {
        console.log('Permission result:', result);
        return (result === true || result === PermissionsAndroid.RESULTS.GRANTED);
      });
  }

  prepareRecordingPath(audioPath) {
    AudioRecorder.prepareRecordingAtPath(audioPath, {
      SampleRate: 22050,
      Channels: 1,
      AudioQuality: "Low",
      // AudioEncoding: "amr_wb"
      AudioEncoding: "amr_wb"
    });
  }

  componentDidMount() {
    this._checkPermission()
      .then((hasPermission) => {
        this.setState({ hasPermission });
        if (!hasPermission) return;
        this.prepareRecordingPath(this.state.audioPath);
        AudioRecorder.onProgress = (data) => {
          this.setState({
            currentTime: Math.floor(data.currentTime)
          });
        };
        AudioRecorder.onFinished = (data) => {
          // Android callback comes in the form of a promise instead.
          if (Platform.OS === 'ios') {
            this._finishRecording(data.status === "OK", data.audioFileURL);
          }
        };
      });
  }

  _finishRecording(didSucceed, filePath) {
    this.setState({ finished: didSucceed });
    
    // let base64Blob = Base64.encode(filePath)
    // base64Blob
    
    googleSpeech.speechToText()
      .then((data) => {
        data.result[0]
        
      })
      .catch((err) => {
        console.log(err)
      })
    console.log(`Finished recording of duration ${this.state.currentTime} seconds at path: ${filePath}`);
  }

  render() {
    return (
    <View>
      <Button
        title="Record"
        onPress={() => {
          this._record()
        }}
      />
      <Button
        title="Stop"
        onPress={() => {
          this._stop()
            .then((data) => {
              data
            })
        }}
      />
      <Button
        title="Play"
        onPress={() => {
          this._play()
            .then((data) => {
              data
            })
        }}
      />
      <AppNavigation />
    </View>
    )
  }
}

const AppNavigation = StackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen
    },
    WorldScreen: {
      screen: WorldScreen
    },
    GameScreen: {
      screen: GameScreen
    }
  },
  {
    initialRouteName: 'WorldScreen',
  },
);

