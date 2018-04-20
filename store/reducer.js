import initialState from './initialState';
import TRAVELPEDIA_ACTIONS from './actionConstants';

export default function reducer(state = initialState, action){

  switch(action.type){
    
    case TRAVELPEDIA_ACTIONS.ADD_IMAGE:
      return { ...state, current: {...state.current, uri: action.uri, base64: action.base64 }}
  
    case TRAVELPEDIA_ACTIONS.ADD_TITLE:
      return { ...state, current: {...state.current, title: action.title}}
  
    case TRAVELPEDIA_ACTIONS.ADD_SUMMARY:
      return { ...state, current: {...state.current, summary: action.summary } }
    
    case TRAVELPEDIA_ACTIONS.ADD_TO_HISTORY:
      return { ...state, history: [ ...state.history, state.current ] }

    case TRAVELPEDIA_ACTIONS.ADD_TO_CURRENT:
      return { ...state, current: action.payload }

    default:
      return state;
  }
}

//ADD_TO_HISTORY
//CLEAR_CURRENT => new state with empty strings
