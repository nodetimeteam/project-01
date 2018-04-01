import axios from 'axios';
import GOOGLE_SPEECH from '../../config/googleSpeech'
const headers = {

}

const googleSpeech = {
    speechToText: (blob) => {
        blob
        console.log(blob)
        let data = {
            "config": {
                // "encoding": "FLAC",
                // "encoding": "AMR_WB",
                "encoding": "LINEAR16",
                "sampleRateHertz": 16000,
                // "AudioEncodingBitRate": 16000,
                "languageCode": "en-US",
                "enableWordTimeOffsets": false
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
    signingAndUpload: (file) => {
        return axios(`/api/fileuploads/signing?file-name=${file.name}&file-type=${file.type}`)
            .then((file => {
                return response => {
                    let responseNew = {}
                    return responseNew = {
                        url: response.data.signedRequest,
                        headers: {
                            'Content-Type': file.type
                        },
                        data: file,
                        method: 'PUT'
                    }
                }
            })(file))
    }
}

const responseSuccessHandler = response => response.data;
const responseErrorHandler = error => {
    console.log(error);
    return Promise.reject(error);
}

export default googleSpeech