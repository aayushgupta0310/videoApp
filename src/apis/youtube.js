import axios from 'axios';
const KEY = 'AIzaSyBBZObegx5zh9zCEUZ55urt3LrCJOB2lws';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type:'video',
        maxResults:5,
        key:KEY
    }
});