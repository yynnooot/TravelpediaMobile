import AlbumIcon from './AlbumIcon';
import { addImage } from '../store/actions';
import { connect } from 'react-redux';


export const mapDispatchToProps = (dispatch) => ({
  selectPictureAsync: (photoURI) => {
    dispatch(addImage(photoURI))
  }
})

const AlbumIconContainer = connect(
  null,
  mapDispatchToProps
)(AlbumIcon)

export default AlbumIconContainer;