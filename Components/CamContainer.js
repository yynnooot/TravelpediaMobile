import Cam from './Cam';
import { addImage } from '../store/actions';
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch) => ({
  takePictureAsync: (photoURI) => {
    dispatch(addImage(photoURI))
  }
})

const CamContainer = connect(
  null,
  mapDispatchToProps
)(Cam)

export default CamContainer