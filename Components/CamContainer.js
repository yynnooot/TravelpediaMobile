import Cam from './Cam';
import { addImage } from '../store/actions';
import { connect } from 'react-redux';


export const mapDispatchToProps = (dispatch) => ({
  takePictureAsync: (photoURI, base64) => {
    dispatch(addImage(photoURI, base64))
  }
})

const CamContainer = connect(
  null,
  mapDispatchToProps
)(Cam)

export default CamContainer;