import { connect } from 'react-redux';
import CityCard  from '../components/CityCard';

const mapStateToProps = (state) => ({ pinnedCurrentForecast: state.currentWeatherByZipReducer});

export default connect(mapStateToProps)(CityCard);
