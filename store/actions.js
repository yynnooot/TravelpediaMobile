//action creators
import TRAVELPEDIA_ACTIONS from './actionConstants';

export function addImage(uri){
  return {
    type: TRAVELPEDIA_ACTIONS.ADD_IMAGE,
    uri
  }
}

export function addTitle(title){
  return {
    type: TRAVELPEDIA_ACTIONS.ADD_TITLE,
    title
  }
}

export function addSummary(summary){
  return {
    type: TRAVELPEDIA_ACTIONS.ADD_SUMMARY,
    summary
  }
}

export function addToHistory(){
  return {
    type: TRAVELPEDIA_ACTIONS.ADD_TO_HISTORY
  }
}

export function addToCurrent(payload){
  return {
    type: TRAVELPEDIA_ACTIONS.ADD_TO_CURRENT,
    payload
  }
}
