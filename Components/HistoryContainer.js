import History from './History';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  // console.log('***THIS IS STATE:', state)
  return {
    history: state.history
  }
}

const HistoryContainer = connect(
  mapStateToProps
)(History);

export default HistoryContainer;


