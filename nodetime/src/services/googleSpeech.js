import axios from 'axios';
import GOOGLE_SPEECH from '../../config/googleSpeech'
// const fs = require('fs')
const headers = {

}

const googleSpeech = {
    speechToText: (blob) => {
    // speechToText: (filename) => {
        // let blob = fs.readFileSync(filename).toString('base64')
        blob
        console.log(blob)
        debugger;
        let data = {
            "config": {
                // "encoding": "FLAC",
                // "encoding": "AMR_WB",
                // "encoding": "LINEAR16",
                "sampleRateHertz": 16000,
                "languageCode": "en-US",
                // "enableWordTimeOffsets": false
            },
            "audio": {
                // "content": `data:audio/3gp;base64,${blob}`
                "content": blob
                // "uri": `data:audio/3gp;base64,${blob}`
                // "uri": "gs://cloud-samples-tests/speech/brooklyn.flac"
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