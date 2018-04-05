let CV_URL;

import axios from 'axios';

googleApi(base64){
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
      this.setState({description})
     
    })
    .catch(err => {
      console.log('err:', err)
    })
  }
