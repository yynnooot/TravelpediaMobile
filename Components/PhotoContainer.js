import Photo from './Photo';
import { googleThunkAPI } from '../store/thunks';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  uri: state.uri,
  base64: state.base64
})

const mapDispatchToProps = (dispatch) => ({
  googleThunkAPI: function(base64){
    dispatch(googleThunkAPI(base64))
  }
})

const PhotoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Photo);

export default PhotoContainer;


