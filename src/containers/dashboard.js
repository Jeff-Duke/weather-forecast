import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = (state) => ({ pinnedCityList: state.pinnedCityReducer });

export default connect(mapStateToProps)(Home);
