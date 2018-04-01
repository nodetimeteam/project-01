import axios from 'axios';
import GOOGLE_SPEECH from '../../config/googleSpeech'

const headers = {

}

const googleSpeech = {
    speechToText: () => {
        let data = {
            "config": {
                "encoding": "FLAC",
                "sampleRateHertz": 16000,
                "languageCode": "en-US",
                "enableWordTimeOffsets": false
            },
            "audio": {
                "uri": "gs://cloud-samples-tests/speech/brooklyn.flac"
            }
        }
        const config = {
            method: 'POST',
            headers,
            data: data
        }

        return axios(`${GOOGLE_SPEECH}`, config)
            .then(responseSuccessHandler)
            .catch(responseErrorHandler)
    },

}

const responseSuccessHandler = response => response.data;
const responseErrorHandler = error => {
    console.log(error);
    return Promise.reject(error);
}

export default googleSpeech