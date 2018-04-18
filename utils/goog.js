
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import wiki from './wiki';
import {CV_URL} from 'react-native-dotenv'
import Promise from 'bluebird';

export default function googleAPI(base64){
  console.log("**** HITTING GOOGLE API")
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
      
      var title = res.data.responses[0].landmarkAnnotations[0].description;

      if(title){
        wiki(title)
      }
    })
    .catch(err => {
      console.log('err:', err)
      Actions['error']();
    })
  }
