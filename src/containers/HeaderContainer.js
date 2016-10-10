import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = (state) => ({ localWeatherReducer: state.localWeatherReducer});

export default connect(mapStateToProps)(Header);
