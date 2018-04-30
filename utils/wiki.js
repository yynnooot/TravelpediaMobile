import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import store from '../store';
import { dispatch } from 'redux';
import { addSummary } from '../store/actions'

let searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';
let exactQuery = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&origin=*&explaintext=&titles='

const searched = new Set();

export default function wiki(title){

  let searchWiki = searchUrl + title
  let getWiki = exactQuery + title
  
  if (searched.has(title)){
    axios.get(getWiki)
      .then(res => {
        let resObj = res.data.query.pages;
        for(key in resObj){
          const text = resObj[key].extract;
          const newTextArray = text.split('\n')

          store.dispatch(addSummary(newTextArray))

          Actions['result']()
        }
      })
      .catch(err => console.error(err))
  } else {
    searched.add(title)
    axios.get(searchWiki)
    .then(res => {
      if (res.data[1].length === 1){
        axios.get(getWiki)
          .then(res => {
            let resObj = res.data.query.pages;
            for(key in resObj){
              const text = resObj[key].extract;
              const newTextArray = text.split('\n')

              store.dispatch(addSummary(newTextArray))

              Actions['result']()
            }
          })
      } else {
        console.log(res.data[1])
        Actions['wikilist']({ list: res.data[1]})
      }
    })
    .catch(err => console.error(err))
  }
}
