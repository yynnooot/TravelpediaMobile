
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import wiki from './wiki';
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
      console.log('response: ',res.data)
      
      var title=res.data.responses[0].landmarkAnnotations[0].description;

      if(title){
        wiki(title, uri)
      }
      
      //Actions['result']({ photoURI: uri, title: description })
    })
    .catch(err => {
      console.log('err:', err)
      Actions['error']();
    })
  }
