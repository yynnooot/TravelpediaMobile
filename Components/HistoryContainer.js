import History from './History';
import { connect } from 'react-redux';
import { addToCurrent } from '../store/actions'

const mapStateToProps = (state) => {
  return {
    history: state.history
  }
}
const mapDispatchToProps = (dispatch) => ({
  addToCurrent: function(payload){
    dispatch(addToCurrent(payload))
  } 
})

const HistoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(History);

export default HistoryContainer;


