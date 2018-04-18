import googleAPI from '../utils/goog';

export function googleThunkAPI(base64){
  return function(dispatch){
    googleAPI(base64)
  }
}