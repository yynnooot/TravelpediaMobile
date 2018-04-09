import { Actions } from 'react-native-router-flux';
import axios from 'axios';

let searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';

export default function wiki(title, uri){
  let url = searchUrl + title
  axios.get(url)
    .then(res => {
      if(res.data[1].length === 1){
        axios.get(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&origin=*&explaintext=&titles=${title}`)
          .then(res => {
            let resObj = res.data.query.pages;
            for(key in resObj){
              const text = resObj[key].extract;
              const newTextArray = text.split('\n')
              Actions['result']({ photoURI: uri, title: title, textArr: newTextArray })
            }
          })
      } else {
        console.log(res.data[1])
      }
    })
    .catch(err => console.error(err))
}