import initialState from './initialState';
import TRAVELPEDIA_ACTIONS from './actionConstants';

export default function reducer(state = initialState, action){
  switch(action.type){
    
    case TRAVELPEDIA_ACTIONS.ADD_IMAGE:
      return Object.assign({}, ...state, { uri: action.uri, base64: action.base64 })
    default:
      return state;
  }
}
