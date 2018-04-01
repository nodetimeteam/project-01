import axios from 'axios';

const userData = {
    getAll: () => {
       const config = {
           method: 'GET'
       } 
       return axios.get('http://localhost:5001/api/users')   
            .then(onSuccess)
            .catch(onError)
    }
}



const onSuccess = response => response;
const onError = err => {
    console.log(err)
    return Promise.reject(err)
}

export default userData
