import Result from './Result';
import { connect } from 'react-redux';
import { addToHistory } from '../store/actions';

const mapStateToProps = (state) => {
  return {
    uri: state.current.uri,
    title: state.current.title,
    summary: state.current.summary,
    history: state.history,
    current: state.current
  }
}
const mapDispatchToProps = (dispatch) => ({
    addToHistory: function(){
      dispatch(addToHistory())
    }
  })


const ResultContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);

export default ResultContainer;


