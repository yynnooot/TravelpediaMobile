import initialState from './initialState';
import TRAVELPEDIA_ACTIONS from './actionConstants';

export default function reducer(state = initialState, action){
  switch(action.type){
    
    case TRAVELPEDIA_ACTIONS.ADD_IMAGE:
      //return Object.assign(...state, { uri: action.uri, base64: action.base64 })
      return { ...state, current: {...state.current, uri: action.uri, base64: action.base64 }}
    case TRAVELPEDIA_ACTIONS.ADD_TITLE:
      //return Object.assign(...state, { title: action.title })
      // return { ...state, current: { title: action.title } }
      return { ...state, current: {...state.current, title: action.title}}
    case TRAVELPEDIA_ACTIONS.ADD_SUMMARY:
      return { ...state, current: {...state.current, summary: action.summary } }
    
    default:
      return state;
  }
}
