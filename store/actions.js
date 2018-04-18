//action creators
import TRAVELPEDIA_ACTIONS from './actionConstants';

export function addImage(uri, base64){
  return {
    type: TRAVELPEDIA_ACTIONS.ADD_IMAGE,
    uri,
    base64
  }
}