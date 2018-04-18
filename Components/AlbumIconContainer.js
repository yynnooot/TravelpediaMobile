import AlbumIcon from './AlbumIcon';
import { addImage } from '../store/actions';
import { connect } from 'react-redux';


export const mapDispatchToProps = (dispatch) => ({
  selectPictureAsync: (photoURI, base64) => {
    dispatch(addImage(photoURI, base64))
  }
})

const AlbumIconContainer = connect(
  null,
  mapDispatchToProps
)(AlbumIcon)

export default AlbumIconContainer;