
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import {CV_URL} from 'react-native-dotenv'

export default function googleAPI(uri, base64){
  
  const request = {
    requests: [
      {
        image: {
          content: base64
        },
        features: [
          {
            type: "LANDMARK_DETECTION",
            maxResults: 1
          }
        ]
      }
    ]
  }
  axios.post(CV_URL, request)
    .then(res => {
      var description=res.data.responses[0].landmarkAnnotations[0].description;
      Actions['result']({ photoURI: uri, title: description })
    })
    .catch(err => {
      console.log('err:', err)
      Actions['error']();
    })
  }
