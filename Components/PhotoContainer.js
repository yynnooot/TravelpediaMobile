import Photo from './Photo';
import { googleThunkAPI } from '../store/thunks';
import { addTitle } from '../store/actions'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  uri: state.uri,
  base64: state.base64
})

const mapDispatchToProps = (dispatch) => ({
  googleThunkAPI: function(base64){
    dispatch(googleThunkAPI(base64))
  },
  addTitle: function(title){
    dispatch(addTitle(title))
  }
})

const PhotoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Photo);

export default PhotoContainer;


