import React from 'react';
import { PermissionsAndroid, Platform, View, Button, Image } from 'react-native'
import { StackNavigator } from 'react-navigation';
import LoginBackground from './src/screens/LoginBackground';
import LoginScreen from './src/screens/LoginScreen.1';
import WorldScreen from './src/screens/WorldsScreen';
import GameScreen from './src/screens/GameScreen';
import googleSpeech from './src/services/googleSpeech'
import { AudioRecorder, AudioUtils } from 'react-native-audio';
import Sound from 'react-native-sound'
import RNFetchBlob from 'react-native-fetch-blob'


// import FastHands from './src/screens/FastHands';


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
    var reader = new FileReader();
    reader.readAsDataURL(file);
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
      // SampleRate: 22050,
      SampleRate: 16000,
      Channels: 1,
      // AudioQuality: "HIGH",
      AudioEncoding: "amr_wb"
      // AudioEncoding: "aac"
      // AudioEncoding: "vorbis"
      // AudioEncoding: "aac_eld"
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
          if (Platform.OS === 'ios') {
            this._finishRecording(data.status === "OK", data.audioFileURL);
          }
        };
      });
  }

  _finishRecording(didSucceed, filePath) {
    this.setState({
      finished: didSucceed
    });
    let data = ''
    RNFetchBlob.fs.readStream(
      // file path
      filePath,
      // encoding, should be one of `base64`, `utf8`, `ascii`
      'base64',
      // (optional) buffer size, default to 4096 (4095 for BASE64 encoded data)
      // when reading file in BASE64 encoding, buffer size must be multiples of 3.
      4095)
      .then((ifstream) => {
        ifstream.open()
        ifstream.onData((chunk) => {
          // when encoding is `ascii`, chunk will be an array contains numbers
          // otherwise it will be a string
          data += chunk
          // chunk
          data
        })
        ifstream.onError((err) => {
          console.log('oops', err)
        })
        ifstream.onEnd(() => {
          googleSpeech.speechToText(data)
            // googleSpeech.speechToText(filePath)
            .then((dataD) => {
              if (dataD.length >= 2) {
                let results = dataD.results[0].alternatives[0]
                console.log(dataD)
                console.log(results)
              }
              console.log(dataD)
            })
            .catch((err) => {
              console.log(err)
            })
        })
      })
    console.log(`Finished recording of duration ${this.state.currentTime} seconds at path: ${filePath}`);
  }



  render() {
    return (
    // <View>
    //   <Button
    //     title="Record"
    //     onPress={() => {
    //       this._record()
    //     }}
    //   />
    //   <Button
    //     title="Stop"
    //     onPress={() => {
    //       this._stop()
    //         .then((data) => {
    //           data
    //         })
    //     }}
    //   />
    //   <Button
    //     title="Play"
    //     onPress={() => {
    //       this._play()
    //         .then((data) => {
    //           data
    //         })
    //     }}
    //   />
    // </View>
      <AppNavigation />
    )
  }
}

const AppNavigation = StackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen
    },
    LoginBackground: {
      screen: LoginBackground
    },
    WorldScreen: {
      screen: WorldScreen
    },
    GameScreen: {
      screen: GameScreen
    },
    // FastHands: {
    //   screen: FastHands
    // },
  },
  {
    initialRouteName: 'LoginBackground',
    // initialRouteName: 'GameScreen',
    }
);

