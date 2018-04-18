import Result from './Result';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  uri: state.uri
})


const ResultContainer = connect(
  mapStateToProps
)(Result);

export default ResultContainer;


