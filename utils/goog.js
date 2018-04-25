
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import wiki from './wiki';
import {CV_URL} from 'react-native-dotenv';

import store from '../store';
import { dispatch } from 'redux';
import { addTitle } from '../store/actions'

export default function googleAPI(base64){
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
        store.dispatch(addTitle(title))
        wiki(title)
      }
    })
    .catch(err => {
      console.log('err:', err)
      Actions['error']();
    })
  }
