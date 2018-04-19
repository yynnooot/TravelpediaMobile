import Result from './Result';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  // console.log('***THIS IS STATE:', state)
return {
  uri: state.current.uri,
  title: state.current.title,
  summary: state.current.summary
}
}

const ResultContainer = connect(
  mapStateToProps
)(Result);

export default ResultContainer;


