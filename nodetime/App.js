import React from 'react';
import { PermissionsAndroid, Platform } from 'react-native'
import { StackNavigator } from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen';
import GameScreen from './src/screens/GameScreen';
import googleSpeech from './src/services/googleSpeech'
import { AudioRecorder, AudioUtils } from 'react-native-audio';
// let audioPath = AudioUtils.DocumentDirectoryPath + '/active.amr_wb';
// let audioPath = './active.3gp'
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
      // audioPath: AudioUtils.DocumentDirectoryPath + '/active.3gp',
      audioPath: 'data/misc/active.3gp',
      // audioPath: './active.3gp',
      hasPermission: undefined,
    };
    this._checkPermission = this._checkPermission.bind(this)
    this._finishRecording = this._finishRecording.bind(this)
    this.getBase64 = this.getBase64.bind(this)
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

    if(this.state.stoppedRecording){
      this.prepareRecordingPath(this.state.audioPath);
    }

    this.setState({recording: true, paused: false});

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

    this.setState({stoppedRecording: true, recording: false, paused: false});

    try {
      const filePath = await AudioRecorder.stopRecording();
      
      debugger;


      if (Platform.OS === 'android') {

        debugger;
        this._finishRecording(true, filePath);
      }
      return filePath;
    } catch (error) {
      console.error(error);
    }
  }

  getBase64(file) {
    debugger;
    var reader = new FileReader();
    debugger;
    let dataBlob = reader.readAsDataURL(file);
    dataBlob
    debugger;
    reader.onload = function () {
      console.log(reader.result);
    };
    debugger;
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
    debugger;
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
      AudioEncoding: "amr_wb"
    });
  }

  componentDidMount() {

    this._checkPermission()
      .then((hasPermission) => {
        this.setState({ hasPermission });
        // debugger;
        if (!hasPermission) return;
        debugger;
        this.prepareRecordingPath(this.state.audioPath);
        debugger;
        AudioRecorder.onProgress = (data) => {
          debugger;
          this.setState({ currentTime: Math.floor(data.currentTime) });
        };
        debugger;
        AudioRecorder.onFinished = (data) => {
          debugger;
          // Android callback comes in the form of a promise instead.
          if (Platform.OS === 'ios') {
            this._finishRecording(data.status === "OK", data.audioFileURL);
          }
        };
        // let sampleAudio = AudioUtils.DocumentDirectoryPath + '/active.3gp'
        let sampleAudio = 'data/misc/active.3gp'
        // let base64Audio = this.getBase64(sampleAudio)
        // this.getBase64(sampleAudio)
        //   .then((data) => {
        //     data
        //     debugger;
        //   })
        debugger;
      });
    debugger;
    // AudioRecorder.stopRecording()
    // debugger;



    debugger;
    googleSpeech.speechToText()
      .then((data) => {

        let newData = data.results[0].alternatives[0]
        debugger;
        // console.log(sampleAudio)
        console.log(newData)
      })
      .catch((err) => {
        debugger;
        console.log(err)
      })
  }

  _finishRecording(didSucceed, filePath) {
    this.setState({ finished: didSucceed });
    console.log(`Finished recording of duration ${this.state.currentTime} seconds at path: ${filePath}`);
  }

  render() {


    return (
      <AppNavigation />
    );
  }
}

const AppNavigation = StackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen
    },
    GameScreen: {
      screen: GameScreen
    },
  },
  {
    initialRouteName: 'GameScreen',
  },
);

